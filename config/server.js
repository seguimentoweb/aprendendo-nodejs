var express = require('express');

var app = express();

app.set('view engine', 'ejs'); // Alterando o motor de views do express
app.set('views', './app/views');

module.exports = app;
