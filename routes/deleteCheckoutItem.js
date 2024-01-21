var express = require('express');
var router = express.Router();
const fs = require('fs');

/* DELETE checkout item. */
router.delete('/:id', (req, res) => {
  // Read Data from cart
  const cartData = fs.readFileSync("cart.json");
  const newCartData = JSON.parse(cartData);
  const id = parseInt(req?.params?.id);
  const validId = newCartData?.some((item) => item?.id === id);
  
  if (!validId) {
    return res.status(404).json({ status: 404, message: 'Data not found with the specified Id', success: false });
  }

  // write new data to cart
  const filteredProducts = newCartData?.filter((item) => item?.id !== id);
  const cartJsonData = JSON.stringify(filteredProducts, null, 2);
  fs.writeFileSync("cart.json", cartJsonData);
  res.status(200).json({ status: 200, success: true, message: 'Product Deleted successfully' });
});
module.exports = router;