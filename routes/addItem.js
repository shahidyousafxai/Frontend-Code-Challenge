var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

// Function to read data from the JSON file
function readDataFile() {
 try {
  const data = fs.readFileSync("init_data.json");
  return JSON.parse(data);
 } catch (error) {
  console.log("-------------->>>>>>>>error", error)
 }
}

// Function to write data to the JSON file
function writeDataFile(data) {
 const jsonData = JSON.stringify(data, null, 2);
 console.log("-------------->>>>>>>>data", data)
 fs.writeFileSync("init_data.json", jsonData);
}


router.post('/', (req, res) => {
 const newData = req.body;
 const data = readDataFile();
 data?.data?.push({id: data?.data?.length + 1, ...newData});
 writeDataFile(data);

 res.json({ message: 'Data added successfully', newData });
});
module.exports = router;