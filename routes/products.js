var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    models.Producto.findAll().then(function(products) {
        res.send(products)
    });
});

module.exports = router;