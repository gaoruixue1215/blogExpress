var express = require('express');
var router = express.Router();
var data = require('../data.json');
var chapterList = data.chapterList;

/* GET users listing. */
router.get('/', function(req, res, next) {
  // for(var i = 0;i<data.chapterList.length;i++){
  //   console.log(data.chapterList[i].title);
  // }
  res.render('list', {chapterList:chapterList});  
});

module.exports = router;
