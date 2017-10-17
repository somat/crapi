let express = require('express')
let router = express.Router()
let url = require('../urls')
let chat = require('./controllers/chat')

// Homepage, dont throw error, just say hello.
router.get('/', function(req, res) {res.json({message: 'Hello.'})})

// chat
router.post(url.chat_list, chat.getAll)
router.post(url.chat_view, chat.getOne)
router.post(url.chat_add, chat.add)

module.exports = router
