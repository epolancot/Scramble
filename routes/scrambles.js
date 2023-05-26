var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('scrambles/index', {
    title: "Scramble"
  });
});
router.get('/new', function(req, res, next) {
  res.render('scrambles/create', {
    title: "Create Scramble"
  });
});

module.exports = router;    