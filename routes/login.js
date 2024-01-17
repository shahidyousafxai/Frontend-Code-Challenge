var express = require('express');
const generateToken = require('../utils/generateToken');
var router = express.Router();

router.post('/', function (req, res, next) {

 const { username, password } = req.body;

 const token = generateToken(30);
 res.json({ success: true, message: 'Login successful', token });
});

module.exports = router;