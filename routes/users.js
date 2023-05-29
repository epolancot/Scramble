var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/new', function(req, res, next) {
  res.render('users/new', {
    title: "New User"
  });
});
router.get('/friends', function(req, res, next) {
  res.render('users/friends/index', {
    title: "New User"
  });
});

module.exports = router;
