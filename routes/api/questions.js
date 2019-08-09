//=====================================================================================================================
// Dependencies
//=====================================================================================================================

const Question = require('../../models/Questions');

const express = require('express');
const {check, validationResult} = require ('express-validator');

const router = express.Router();


//router.get('/', (req, res) => res.send('AddQuestion route'));

// @route   POST api/addquestion
// @desc    Post new questions to database
// @access  Public

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
// Export router to use in server.js
//=====================================================================================================================

module.exports = router;