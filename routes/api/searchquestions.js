//=====================================================================================================================
// Dependencies
//=====================================================================================================================
const Question = require('../../models/Question');
// const User = require('../../models/User');

// const auth = require('../../middleware/auth');
const express = require('express');



//=====================================================================================================================
// Used to separate routes from the server.js file
//=====================================================================================================================
const router = express.Router();

//=====================================================================================================================
// @route   GET api/questions
// @desc    Get all questions
// @access  Private
//=====================================================================================================================

router.get('/', async (req, res) => {

    // pass names from req body to object
    const { searchTopic } = req.body;

    console.log(req.body)

    try {
        const questions = await Question.find({ searchTopic});
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