var express = require('express');
var consign = require('consign');

var app = express();

app.set('view engine', 'ejs'); // Alterando o motor de views do express
app.set('views', './app/views');

consign()
    .include('app/routes')
    .then('config/database.js')
    .then('app/models')
    .into(app); // autoload de arquivos

module.exports = app;