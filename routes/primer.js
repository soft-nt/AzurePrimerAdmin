var express = require('express');
var router = express.Router();

var primerService = require('../services/primerService');

/* GET users listing. */
router.get('/templates', function (req, res) {
    res.json(primerService.getTemplates());
});

module.exports = router;