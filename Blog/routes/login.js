var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.route('/')
.get(function(req, res, next) {
    res.render('login',{message:" "});
})
.post(function(req,res){
  console.log(req.body);
  console.log(data.users.length);
  for(var i = 0;i < data.users.length;i++){
    if(req.body.username===data.users[i].username && req.body.password === data.users[i].password){
      res.redirect('/list');
    }else{
      res.render('login',{message:"用户名或密码错误"});
    }
  }
})

module.exports = router;
