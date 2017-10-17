let config = require('../config')
let mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
let opts = {useMongoClient: true}
mongoose.connect(config.db_string, opts)

let Chat = require('../app/models/chat')

Chat.create({
  enc: "Halo mas bro, apa kabar?",
  dec: "Halo, kabar baik mas bro."
}).then(function(data) {
  console.log(data)
  process.exit()
})
