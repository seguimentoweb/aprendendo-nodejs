module.exports = function(app) {

  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'portal_noticias'
  });

  app.get('/noticias', function(request, response){
    var sql = 'SELECT * FROM noticias';
    connection.query(sql, function(error, result){
      response.send(result);
    });

    //response.render("noticias/noticias");
  });

  app.get('/noticias/view', function(request, response){
    response.render("noticias/noticia");
  });

  app.get('/admin/noticias/add', function(request, response){
    response.render("admin/form_add_noticia");
  });
};
