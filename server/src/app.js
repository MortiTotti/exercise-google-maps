import express from 'express';
import config from './config';

const startServer = async () => {

  const app = express();

  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, err => {
    if (err) {
      console.log(err);
      process.exit(1);
      return;
    }
    console.log('Server listening on port: ', config.port);
  });
}

startServer();

/*
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/



