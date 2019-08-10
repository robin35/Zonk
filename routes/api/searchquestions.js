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

router.get('/:searchTopic', async (req, res) => {

    let searchTopic = req.params.searchTopic

    console.log(searchTopic)

    try {
        const questions = await Question.find({ topic: searchTopic });
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