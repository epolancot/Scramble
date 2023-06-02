const express = require('express')
const router = express.Router()
const invitesCtrl = require('../controllers/invites')

router.get('/:id', invitesCtrl.index)
router.get('/scrambles/:id', invitesCtrl.participate)
router.post('/scrambles/:id/join', invitesCtrl.join)

module.exports = router;    