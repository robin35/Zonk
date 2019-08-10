//=====================================================================================================================
// Dependencies
//=====================================================================================================================
const Question = require('../../models/Question');
const User = require('../../models/User');

const auth = require('../../middleware/auth');
const express = require('express');
const {check, validationResult} = require ('express-validator');


//=====================================================================================================================
// Used to separate routes from the server.js file
//=====================================================================================================================
const router = express.Router();


//=====================================================================================================================
// @route   POST api/questions
// @desc    Posts new questions to database
// @access  Public
//=====================================================================================================================

// verify input
router.post(
    '/', 
    [
        check('topic', 'Topic is required').not().isEmpty(),
        check('question', 'Question is required').not().isEmpty(),
        check('answera', 'Answer A is required').not().isEmpty(),
        check('answerb', 'Answer B is required').not().isEmpty(),
        check('answerc', 'Answer C is required').not().isEmpty(),
        check('answerd', 'Answer D is required').not().isEmpty(),
        check('correct', 'Correct answer is required').not().isEmpty()
    ],
    async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // pass names from req body to object
    const { topic, question, answera, answerb, answerc, answerd, correct } = req.body;

    try {
        // See if question exists
        let questions = await Question.findOne({ question });
        if(questions) {
            return res.status(400).json({ errors: [{ msg: 'Question already exists' }] });
        }
        
        // create a new instance of the Question constructor
        questions = new Question({ 
            topic, 
            question, 
            answera, 
            answerb, 
            answerc, 
            answerd, 
            correct 
        })

        // Save the to the DB
        await questions.save();

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


//=====================================================================================================================
// @route   GET api/questions
// @desc    Get questions
// @access  Private
// Use async / await because we are using mongoose
//=====================================================================================================================

router.get('/', auth, async (req, res) => {
    try {
        const userdata = await User.findOne({ user: req.user.id }).populate('user', 'name');

        if(!userdata) {
            return res.status(400).json({ msg: 'Invalid user' });
        }

        res.json(userdata);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


//=====================================================================================================================
// @route   GET api/questions
// @desc    Get all questions
// @access  Private
//=====================================================================================================================

router.get('/', async (req, res) => {

    try {
        const questions = await Question.find().populate('user', 'name');
        res.json(questions);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});





//=====================================================================================================================
// Export router to use in server.js
//=====================================================================================================================

module.exports = router;