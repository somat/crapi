var mongoose = require('mongoose')
var Category = require('../models/category')

var CategoryController = {}

/**
 * Get all Category
 * @param  {Object}   req  Request object
 * @param  {Object}   res  Response object
 * @return {Object}        Response object
 */
CategoryController.getAll = function(req, res) {
  Category.find()
  .then(function(data) {
    res.status(200).json({
      success: true,
      message: 'Get all Category success.',
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
 * Get Category by ID
 * @param  {Object}   req  Request object
 * @param  {Object}   res  Response object
 * @return {Object}        Response object
 */
CategoryController.getOne = function(req, res) {
  req.assert('id', 'Category ID cannot be empty').notEmpty()
  error = req.validationErrors()

  if(error) {
    res.status(200).json({
      success: false,
      message: 'Validation error.',
      data: {}
    })
  } else {
    Category.findById(req.body.id)
    .then(function(data) {
      res.status(200).json({
        success: true,
        message: 'View Category success',
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

/**
 * Add new corpus
 * @param  {Object}   req  Request object
 * @param  {Object}   res  Response object
 * @return {Object}        Response object
 */
CategoryController.add = function(req, res) {
  req.assert('name', 'Name cannot be empty').notEmpty()
  error = req.validationErrors()

  if(error) {
    res.status(200).json({
      success: false,
      message: 'Validation error.',
      data: {}
    })
  } else {
    Category.create({
      name: req.body.name
    })
    .then(function(data) {
      res.status(200).json({
        success: true,
        message: 'Create category success',
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

module.exports = CategoryController
