'use strict';

var express = require('express');

// Globals
var router = express.Router();

// Routes
router.get('/pricing', function(req, res) {
    res.send("pricing")
});

router.get('/docs', function(req, res) {
    res.send("docs")
});

// Exports
module.exports = router;