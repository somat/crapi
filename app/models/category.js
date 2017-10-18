let mongoose = require('mongoose')
let Schema = mongoose.Schema

/**
 * Category model
 */
let Category = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    index: {unique: true}
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Category', Category)
