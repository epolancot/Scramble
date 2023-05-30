var express = require('express');
var router = express.Router();

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
router.get('/friends/view/:id', function(req, res, next) {
  res.render('users/friends/view', {
    title: "New User"
  });
});

module.exports = router;
