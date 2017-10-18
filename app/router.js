let express = require('express')
let router = express.Router()
let url = require('../urls')
let chat = require('./controllers/chat')
let category = require('./controllers/category')

// Homepage, dont throw error, just say hello.
router.get('/', function(req, res) {res.json({message: 'Hello.'})})

// chat
router.post(url.chat_list, chat.getAll)
router.post(url.chat_view, chat.getOne)
router.post(url.chat_sub, chat.getSub)
router.post(url.chat_add, chat.add)

// category
router.post(url.category_list, category.getAll)
router.post(url.category_view, category.getOne)

module.exports = router
