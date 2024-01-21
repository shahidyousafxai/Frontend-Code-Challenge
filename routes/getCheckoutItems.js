var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  const cartData = fs.readFileSync("cart.json");
  const newCartData = JSON.parse(cartData);
  res.json({ status: 200, success: true, message: 'Data added successfully', data: newCartData?.data});
});
module.exports = router;