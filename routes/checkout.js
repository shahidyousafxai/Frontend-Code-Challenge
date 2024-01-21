var express = require('express');
var router = express.Router();
const fs = require('fs');

/* Add item to cart. */
router.post('/:id', (req, res) => {
  // Read Data from products
  const productData = fs.readFileSync("products.json");
  const newProductData = JSON.parse(productData);
  const id = parseInt(req?.params?.id);
  const item = newProductData?.find((item) => item?.id === id); 

  // Check if item is undefined (id not found)
  if (!item) {
    return res.status(404).json({ status: 404, success: false, message: 'Data not found with the specified Id' });
  }

  // Write new data to products
  const filteredData = newProductData?.filter(item => item?.id !== id);
  const productJsonData = JSON.stringify(filteredData, null, 2);
  fs.writeFileSync("products.json", productJsonData);
  
  // Read data from cart
  const cartData = fs.readFileSync("cart.json");
  const newCartData = JSON.parse(cartData);
  newCartData?.push({ ...item, id: newCartData?.length + 1, checkout: true });

  // write new data to cart
  const cartJsonData = JSON.stringify(newCartData, null, 2);
  fs.writeFileSync("cart.json", cartJsonData);

  res.status(200).json({ status: 200, success: true, message: 'Data added successfully' });
});
module.exports = router;