const express = require('express');
const router = express.Router();
const config = require('config');
const {check, validationResult} = require ('express-validator');

//this is basically a test route
// @route   GET api/gameboard
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('GameBoard route'));

module.exports = router;