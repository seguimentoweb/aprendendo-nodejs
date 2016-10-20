module.exports = function(app) {
  app.get('/noticias', function(request, response){
    response.render("noticias/noticias");
  });

  app.get('/noticias/view', function(request, response){
    response.render("noticias/noticia");
  });

  app.get('/admin/noticias/add', function(request, response){
    response.render("admin/form_add_noticia");
  });
};
