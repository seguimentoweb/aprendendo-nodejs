module.exports = function(app) {
  var connection = require('../../config/database')();
  app.get('/noticias', function(request, response){
    var sql = 'SELECT * FROM noticias';
    connection.query(sql, function(error, result){
      response.render("noticias/noticias", {noticias: result});
    });
  });

  app.get('/noticias/view', function(request, response){
    response.render("noticias/noticia");
  });

  app.get('/admin/noticias/add', function(request, response){
    response.render("admin/form_add_noticia");
  });
};
