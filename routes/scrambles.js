var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('scrambles/index', {
    title: "Scramble"
  });
});
router.get('/new', function(req, res, next) {
  res.render('scrambles/new', {
    title: "New Scramble"
  });
});
router.get('/friends', function(req, res, next) {
  res.render('scrambles/friends', {
    title: "Friends"
  });
});

module.exports = router;    