var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//MONGODB
// This is the entry point of our application. It configures the app and then connects to the database.
// Once the application is running it connects to Mongo so that other components can use the already established connections with the database.
var db = require('./models/db');


var MONGOLAB_URI = "mongodb://heroku_r6sjd8qg:r97qc4jugld21kin2qfqpolgmq@ds035683.mongolab.com:35683/heroku_r6sjd8qg"

// Connect to Mongo on start
//db.connect('mongodb://localhost:27017/bigtreasurehunt', function(err) {
db.connect( MONGOLAB_URI, function(err) {
  if (err) {
    console.log('Unable to connect to Mongo db says greg.')
    process.exit(1)
  } else {
    //app.listen(3000, function() {
    app.listen(8080, function() {
      console.log('Listening on port 3000...')
    })
  }
})

//Added this to create a schema and an instance quiz2
//var quiz = require('./models/quiz');

//for heroku connect
//var mongoose = require("mongoose");
//mongoose.connect(
//  process.env.MONGOLAB_URI ||
//  process.env.MONGOHQ_URL ||
//  'mongodb://localhost/bigtreasurehunt' // plug in the db name you've been using
//);

//===============================================


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
