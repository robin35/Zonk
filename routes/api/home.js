const express = require('express');
const router = express.Router();

//this is basically a test route
// @route   GET api/home
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Home route'));

module.exports = router;