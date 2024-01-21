var express = require('express');
var router = express.Router();
const fs = require('fs');

// Function to read data from the JSON file
function readDataFile() {
  try {
    const data = fs.readFileSync("products.json");
    return JSON.parse(data);
  } catch (error) {
    console.log("error", error)
  }
}

// Function to write data to the JSON file
const writeDataFile = async (data) => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync("products.json", jsonData);
}

/* Add item to Items List. */
router.post('/', (req, res) => {
  const { name, price, img } = req.body;
  const data = readDataFile();
  data?.push({ id: data?.length + 1, name, price, img, checkout: false })
  console.log(data)
  writeDataFile(data);
  res.status(200).json({ success: true, message: 'Data added successfully' });
});
module.exports = router;