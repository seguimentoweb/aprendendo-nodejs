var express = require('express');
var app = express();

app.set('view engine', 'ejs'); // Alterando o motor de views do express

app.get('/', function(request, response){
  response.send("<html><body>Send porrra no get</body></html>");
});

app.get('/teconologia', function(request, response){
  response.send("<html><body>Noticias de tecnologia</body></html>");
});

app.listen(3000, function () {
  console.log('Essa porra functiona');
});
