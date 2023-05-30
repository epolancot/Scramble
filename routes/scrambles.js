const express = require('express')
const router = express.Router()
const scrambleCtrl = require('../controllers/scrambles')


router.get('/', function(req, res, next) {
  res.render('scrambles/index', {
    title: "Scramble"
  })
})
router.get('/new', function(req, res, next) {
  res.render('scrambles/new', {
    title: "New Scramble"
  })
})
router.get('/view/:id', function(req, res, next) {
  res.render('scrambles/view', {
    title: "Scramble"
  })
})
router.post('/', scrambleCtrl.create);




module.exports = router;    