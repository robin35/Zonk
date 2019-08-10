//=====================================================================================================================
// Dependencies
//=====================================================================================================================
const Stat = require('../../models/Stat');
// const User = require('../../models/User');

const auth = require('../../middleware/auth');
const express = require('express');


//=====================================================================================================================
// Used to separate routes from the server.js file
//=====================================================================================================================

const router = express.Router();


//=====================================================================================================================
// @route   POST api/stats
// @desc    Create or update a user's statistics
// @access  Private
//=====================================================================================================================

router.post(
    '/', 
    async (req, res) => {

    // pass names from req body to object
    const { streak, score } = req.body;

    // build stat object
    const statFields = {};
        // statFields.user = req.user.id;
        if(streak) statFields.streak = streak;
        if(score) statFields.score = score;

    try {
        // create a new instance of the Stat constructor
        let stat = new Stat({ 
            streak, 
            score 
        });

        // Save the to the DB
        await stat.save();

        //this is needed to make Postman work
        alert(res); 

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});





//=====================================================================================================================
// @route   GET api/stat
// @desc    Get current user's statics
// @access  Private
// Use async / await because we are using mongoose
//=====================================================================================================================

router.get('/', auth, async (req, res) => {
    
    try {
        const stat = await Stat.findOne({ user: req.user.id }).populate('user', 'name');

        if(!stat) {
            return res.status(400).json({ msg: 'There are no statistics for this user' });
        }

        res.json(stat);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


//=====================================================================================================================
// Export router to use in server.js
//=====================================================================================================================

module.exports = router;