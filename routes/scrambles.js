const express = require('express')
const router = express.Router()
const scrambleCtrl = require('../controllers/scrambles')


router.get('/', scrambleCtrl.index)
router.get('/new', scrambleCtrl.newView)
router.get('/view/:id', scrambleCtrl.showScramble)
router.post('/', scrambleCtrl.create);




module.exports = router;    