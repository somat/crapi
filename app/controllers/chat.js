var mongoose = require('mongoose')
var Chat = require('../models/chat')

var ChatController = {}

/**
 * Get all Chat
 * @param  {Object}   req  Request object
 * @param  {Object}   res  Response object
 * @return {Object}        Response object
 */
ChatController.getAll = function(req, res) {
  Chat.find()
  .then(function(data) {
    res.status(200).json({
      success: true,
      message: 'Get all Chat success.',
      data: data
    })
  })
  .catch(function(err) {
    res.status(500).json({
      success: false,
      message: err,
      data: {}
    })
  })
}

/**
 * Get Chat by ID
 * @param  {Object}   req  Request object
 * @param  {Object}   res  Response object
 * @return {Object}        Response object
 */
ChatController.getOne = function(req, res) {
  req.assert('id', 'Chat ID cannot be empty').notEmpty()
  error = req.validationErrors()

  if(error) {
    res.status(200).json({
      success: false,
      message: 'Validation error.',
      data: {}
    })
  } else {
    Chat.findById(req.body.id)
    .then(function(data) {
      res.status(200).json({
        success: true,
        message: 'View Chat success',
        data: data
      })
    })
    .catch(function(err) {
      res.status(500).json({
        success: false,
        message: err,
        data: {}
      })
    })
  }
}

module.exports = ChatController
