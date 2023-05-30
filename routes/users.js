const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/new', function(req, res, next) {
  res.render('users/new', {
    title: "New User"
  });
});
router.get('/friends', usersCtrl.friendsIndex);
router.get('/friends/view/:id', function(req, res, next) {
  res.render('users/friends/view', {
    title: "New User"
  });
});

module.exports = router;
