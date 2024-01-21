var express = require('express');
var router = express.Router();
const fs = require('fs');

router.delete('/:id', (req, res) => {
  const cartData = fs.readFileSync("cart.json");
  const newCartData = JSON.parse(cartData);
  const id = parseInt(req?.params?.id);
  const validId = newCartData?.some((item) => item?.id === id);
  
  if (!validId) {
    return res.status(404).json({ status: 404, message: 'Data not found with the specified Id', success: false });
  }

  const filteredProducts = newCartData?.filter((item) => item?.id !== id);
  const cartJsonData = JSON.stringify(filteredProducts, null, 2);
  fs.writeFileSync("cart.json", cartJsonData);
  res.json({ status: 200, success: true, message: 'Product Deleted successfully', id: validId });
});
module.exports = router;