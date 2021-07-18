var express = require('express');
var router = express.Router();
const app = express();
const bcrypt=require('bcryptjs')
var adminmodel= require('../models/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/aa',function(req,res,next){
  console.log('aaaaaaaaaaaaa');
})

module.exports = router;
