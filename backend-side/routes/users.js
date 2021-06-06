
var fs = require('fs')
var express = require('express');
var router = express.Router();
var login = require('../controller/login');
/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = fs.readFileSync('users.json','utf8');
  var parsed = JSON.parse(data)
  res.send(parsed);
});

router.post('/login', function (req, res, next) {

  const username = req.body.username;
  let loginResult = login(username, req.body.password);
  console.log(loginResult);
  if (loginResult) {
    res.send('welcome!');
  }
  else {
    res.status(400)
    res.send('no');
  }
  //console.log('Got body:', req.body);
  //res.sendStatus(200);
});
module.exports = router;
