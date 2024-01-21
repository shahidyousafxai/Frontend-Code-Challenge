var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET checkout items listing. */
router.get('/', (req, res) => {
  // Read Data from cart
  const cartData = fs.readFileSync("cart.json");
  const newCartData = JSON.parse(cartData);
  res.status(200).json({ status: 200, success: true, message: 'Data added successfully', data: newCartData});
});
module.exports = router;