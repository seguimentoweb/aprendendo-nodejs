module.exports = function(application) {

  application.get('/noticias', function(request, response){
    var connection = application.config.database();
    var noticiaModel = application.app.models.noticia;
    var sql = 'SELECT * FROM noticias';

    noticiaModel.getNoticias(connection,  function(error, result){
      response.render("noticias/noticias", {noticias: result});
    });
  });

  application.get('/noticias/view', function(request, response){
    var connection = application.config.database();
    var noticiaModel = application.app.models.noticia;
    var sql = 'SELECT * FROM noticias';

    noticiaModel.getNoticia(1, connection,  function(error, result){
      response.render("noticias/noticia", {noticia: result});
    });
  });

  application.get('/admin/noticias/add', function(request, response){
    response.render("admin/form_add_noticia");
  });
};
