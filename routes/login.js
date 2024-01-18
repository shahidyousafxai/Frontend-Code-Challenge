var express = require('express');
const generateToken = require('../utils/generateToken');
var router = express.Router();

router.post('/', (req, res, next) => {

  // get username and password
 const { username, password } = req.body;

 // generate token
 const token = generateToken(30);

 // return response
 res.json({ 
  success: true, 
  message: 'User Logged in successful', 
  token,
  username
  });
});

module.exports = router;