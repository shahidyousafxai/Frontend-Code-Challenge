var express = require('express');
var router = express.Router();
const fs = require('fs');

router.delete('/:id', (req, res) => {
  const productData = fs.readFileSync("products.json");
  const newProductData = JSON.parse(productData);
  const id = parseInt(req?.params?.id);
  const validId = newProductData?.some((item) => item?.id === id);

  if (!validId) {
    return res.status(404).json({ status: false, message: 'Data not found with the specified ID' });
  }

  const filteredProducts = newProductData?.filter((item) => item?.id !== id);
  const cartJsonData = JSON.stringify(filteredProducts, null, 2);
  fs.writeFileSync("products.json", cartJsonData);
  res.status(200).json({ status: 200, success: true, message: 'Product Deleted successfully' });
});
module.exports = router;