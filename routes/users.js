const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/start', usersCtrl.index);
router.get('/profile', ensureLoggedIn, usersCtrl.userProfile);

// Friends feature -----------------------------
router.get('/friends', ensureLoggedIn, usersCtrl.friendsIndex);


module.exports = router;
