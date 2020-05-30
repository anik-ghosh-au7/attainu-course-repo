var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Connecting to mongodb DataBase
mongoose.connect('mongodb://localhost/blogLibrary', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(console.log('Connected to DB'))
    .catch(err => console.log(err));

// Importing Routes
var indexRouter = require('./routes/index');
var blogsRouter = require('./routes/blogs');

// creating express instance
var app = express();

// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// setting up main routes
app.use('/', indexRouter);
app.use('/blogs', blogsRouter);

module.exports = app;
