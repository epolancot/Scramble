const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')

router.get('/start', usersCtrl.index);
router.get('/new', function(req, res, next) {
  res.render('users/new', {
    title: "New User"
  });
});

// Friends feature -----------------------------
router.get('/friends', usersCtrl.friendsIndex);
router.get('/friends/view/:id', function(req, res, next) {
  res.render('users/friends/view', {
    title: "New User"
  });
});

module.exports = router;
