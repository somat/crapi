let mongoose = require('mongoose')
let Schema = mongoose.Schema

/**
 * Chat model
 */
let Chat = new Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  enc: {
    type: String,
    required: true
  },
  dec: {
    type: String,
    required: true
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Chat', Chat)
