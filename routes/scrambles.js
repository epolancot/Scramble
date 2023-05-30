const express = require('express')
const router = express.Router()
const scrambleCtrl = require('../controllers/scrambles')


router.get('/', scrambleCtrl.index)
router.get('/new', function(req, res, next) {
  res.render('scrambles/new', {
    title: "New Scramble"
  })
})
router.get('/view/:id', scrambleCtrl.showScramble)
router.post('/', scrambleCtrl.create);




module.exports = router;    