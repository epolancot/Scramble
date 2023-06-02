const express = require('express')
const router = express.Router()
const scrambleCtrl = require('../controllers/scrambles')
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, scrambleCtrl.index)
router.get('/new', ensureLoggedIn, scrambleCtrl.newView)
router.get('/view/:id', ensureLoggedIn, scrambleCtrl.showScramble)
router.get('/:id/:user/edit', ensureLoggedIn, scrambleCtrl.edit);
router.post('/', ensureLoggedIn, scrambleCtrl.create);
router.post('/:id/:user/update', ensureLoggedIn, scrambleCtrl.update);
router.post('/action', ensureLoggedIn, scrambleCtrl.scramble);

module.exports = router;    