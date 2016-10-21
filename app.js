var app = require('./config/server');
//var rotaHome = require('./app/routes/home')(app); // pode ser assim tbm rotaHome(app) depois do require
//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);

app.listen(3000, function() {
    console.log('Servidor Online');
});