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

router.post('/', (req, res) => {
  const newData = req.body;
  const data = readDataFile();
  console.log(data)
  data?.push({ id: data?.length + 1, ...newData });
  writeDataFile(data);
  res.json({ success: true, message: 'Data added successfully', newData });
});
module.exports = router;