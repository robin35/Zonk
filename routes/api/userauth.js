const express = require('express');
const router = express.Router();

//this is basically a test route
// @route   GET api/userauth
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('UserAuth route'));

module.exports = router;