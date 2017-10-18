let config = require('../config')
let mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
let opts = {useMongoClient: true}
mongoose.connect(config.db_string, opts)

let Chat = require('../app/models/chat')
let Category = require('../app/models/category')

Category.create({
  name: 'Ndrenges'
}).then((data) => {
  return Chat.create({
    category: mongoose.Types.ObjectId(data._id),
    enc: "Lagi di mana?",
    dec: "Lagi di sini nich."
  })
}).then(function(data) {
  console.log(data)
  process.exit()
})
