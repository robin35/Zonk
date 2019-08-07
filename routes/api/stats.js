const express = require('express');
const router = express.Router();

//this is basically a test route
// @route   GET api/stats
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Stats route'));

module.exports = router;