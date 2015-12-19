﻿var express = require('express');
var router = express.Router();

var primerService = require('../services/primerService');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Azure Primer' });
});

module.exports = router;