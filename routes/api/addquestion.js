const express = require('express');
const router = express.Router();

//this is basically a test route
// @route   GET api/addquestion
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('AddQuestion route'));



// This connects to the User.js file in the models folder which exports a User constructor object that holds the mongoose mongoDB fields
const User = require('../../models/Questions');

//this is basically a test route
// @route   POST api/registeruser
// @desc    Register user
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
    const { name, email, password } = req.body;

    try {
        // See if user exists
        let user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }
        
        // create a new instance of the User constructor
        user = new User({ 
            name,
            email,
            password
        })

        // Encrypt password.  Create the "salt"
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        // Save the user to the DB
        await user.save();






module.exports = router;