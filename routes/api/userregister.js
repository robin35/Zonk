const User = require('../../models/User');

const express = require('express');
const {check, validationResult} = require ('express-validator');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require('config');


// @route   POST api/registeruser
// @desc    Register user
// @access  Public

router.post(
    '/', 
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6})
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


        // Return jsonwebtoken - check in MongoDB
        // mongodb ID is "_id:" but mongoose configures it so that we can use ".id"
        // the payload secret is in default.json
        //res.send('User registered')

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


module.exports = router;

