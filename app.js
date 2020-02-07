var express = require('express');
var path = require('path');
var logger = require('morgan');
const { User } = require('./app/models');

var usersRouter = require('./app/routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//User.create({ name: 'Claudio', email: 'claudi@rcketseat.com.br', password: '123456' });
app.use('/users', usersRouter);

module.exports = app;
