const express = require('express');
const router = express.Router();

//this is basically a test route
// @route   GET api/addquestion
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('AddQuestion route'));

module.exports = router;