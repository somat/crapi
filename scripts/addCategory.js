let config = require('../config')
let mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
let opts = {useMongoClient: true}
mongoose.connect(config.db_string, opts)

let Category = require('../app/models/category')

Category.create({
  name: "Testing"
}).then(function(data) {
  console.log(data)
  process.exit()
})
