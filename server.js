let express = require('express');
let logger = require('morgan');
let bodyParser = require('body-parser');
let validator = require('express-validator');
let mongoose = require('mongoose');
let config = require('./config');
mongoose.Promise = require('bluebird');
let opts = {useMongoClient: true}
mongoose.connect(config.db_string, opts)

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());

// Allow CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// App Router
app.use(require('./app/router'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
    .json({
      success: false,
      message: err.message
  });
});

module.exports = app;
