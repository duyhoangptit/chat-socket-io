const express = require('express')
const router = express.Router()
const {login, register, chat} = require('../controllers/chat.controller')

router.get('/login', login)
router.get('/register', register)
router.get('/send-msg', chat)

module.exports = router