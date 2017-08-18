/**
  Blogster

  Blogster is a vanilla blogging application. You can use it to start your own blog!

  Created By: Kay Hudson
  Date: June 9, 2017

**/

// ============================================
// Import required modules for the application
// ============================================

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Database
var sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('database');
db.run('CREATE TABLE users (id INT, username TEXT, password TEXT, email TEXT');

// ============================================
// Create an instance of the Express web engine
// ============================================

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// ============================================
// MIDDLEWARE: Command Express to use these
// ============================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

/* ============================================
* ROUTES: API endpoints
* ============================================
*
* Routes are another way to talk about endpoints on your API
*
* The format for creating an endpoint:
*   - Name of the endpoint
*   - A function to execute when a request is sent to the endpoint
*
* Some valid operations you can perform within the function:
*   - res.render(template_name, data_obj)
*   - res.send(message)
* */

/* GET home page. */
app.get('/', function(req, res) {
    // res.send("Hello yall!")
    res.render('index', { title: 'Blogster', message: null });
});

/* GET registration page. */
app.get('/register', function(req, res) {
  res.render('register', {});
});

/* POST registration page. */
app.post('/register', function(req, res) {
    // res.json(req.body);
    console.log("Body: %s" % req.body);
    // var data = req.body['track'];
    // res.redirect(200, '/');
});

/* Add a new page. */


// ERROR HANDLING: Must be after all routes!

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;


// EXTRAS

// Database
// var sqlite = require('sqlite3').verbose();
// var db = new sqlite.Database('database');
// db.run('CREATE TABLE users (id INT, username TEXT, password TEXT, email TEXT')


// var cookieParser = require('cookie-parser');
// var favicon = require('serve-favicon');

// var index = require('./routes/index');
// var users = require('./routes/users');
// app.use('/', index);
// app.use('/users', users);

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); // uncomment after placing your favicon in /public
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
