const express = require('express')
const router = express.Router()
const scrambleCtrl = require('../controllers/scrambles')
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, scrambleCtrl.index)
router.get('/new', ensureLoggedIn, scrambleCtrl.newView)
router.get('/view/:id', ensureLoggedIn, scrambleCtrl.showScramble)
router.post('/', ensureLoggedIn, scrambleCtrl.create);

module.exports = router;    