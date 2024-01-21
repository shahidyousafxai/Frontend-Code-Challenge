var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET items listing. */
router.get('/', function (req, res) {
    // Read Data from products
    const productsData = fs.readFileSync("products.json")
    // Read Data from cart
    const cartData = fs.readFileSync("cart.json")
    res.json({ success: true, data: JSON.parse(productsData), message: "Data fetched successfully", status: 200, totalCheckoutItems: JSON.parse(cartData)?.length });
});

module.exports = router;
