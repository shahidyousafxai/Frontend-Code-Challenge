var express = require('express');
var router = express.Router();
var _ = require('lodash');
var logger = require('../lib/logger');
var log = logger();
const fs = require('fs');

var items = require('../products.json').data;

/* GET items listing. */
router.get('/', function (req, res) {
    const productsData = fs.readFileSync("products.json")
    const cartData = fs.readFileSync("cart.json")
    console.log(JSON.parse(cartData).data)
    res.json({ success: true, data: JSON.parse(productsData), message: "Data fetched successfully", status: 200, totalCheckoutItems: JSON.parse(cartData)?.data?.length });
});

/* Get a specific item by id */
router.get('/:id', function (req, res, next) {
    var item = items[req.params.id];
    if (!item) {
        return next();
    }
    res.json(items[req.params.id]);
});

/* Delete a item by id */
router.delete('/:id', function (req, res) {
    var item = items[req.params.id];
    delete items[req.params.id];
    res.status(204);
    log.info('Deleted item', item);
    res.json(item);
});

/* Update a item by id */
router.put('/:id', function (req, res, next) {
    var item = req.body;
    if (item.id != req.params.id) {
        return next(new Error('ID paramter does not match body'));
    }
    items[item.id] = item;
    log.info('Updating item', item);
    res.json(item);
});


module.exports = router;
