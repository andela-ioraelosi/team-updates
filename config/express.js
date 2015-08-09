'use strict';

var express = require('express');
var app = express();

app.get('', function (request, response) {
  response.status(200).send('Hello World');
});

module.exports = app;
