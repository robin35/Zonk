//=====================================================================================================================
// Dependencies
//=====================================================================================================================

const User = require('../../models/User');

const express = require('express');

const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require('config');
const {check, validationResult} = require ('express-validator');




const router = express.Router();

//=====================================================================================================================
//this is basically a test route
// @route   GET api/auth
// @desc    Test route
// @access  Public
//=====================================================================================================================

router.get('/', (req, res) => res.send('Game route'));

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



//this is basically a test route
// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public

router.post(
    '/', 
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // See if user exists
        let user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        // password = user entered; user.password = what's stored in mongoDB
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload, 
            config.get("jwtSecret"),
            { expiresIn: 360000 },
            (err, token) => {
                res.json({ token });
            });

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


//=====================================================================================================================
// Export router to use in server.js
//=====================================================================================================================

module.exports = router;