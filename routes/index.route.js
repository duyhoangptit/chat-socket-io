const express = require('express')
const router = express.Router()
const {index, listenEvent} = require('../controllers/home.controller')

router.get('/', index)
router.get('/send-event/:btc', listenEvent)

module.exports = router