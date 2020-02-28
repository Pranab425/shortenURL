var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('newurl : API is working properly');
});
router.post('/', function(req, res){
  console.log(req.body.body.url);
  var text = 'smallUrl.com/';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  res.send(text);
});
module.exports = router;
