module.exports = function() {
    var me = this;
    var sql;

    me.getNoticias = function(connection, callback) {
        sql = "SELECT * FROM noticias";
        connection.query(sql, callback);
    };

    me.getNoticia = function(idNoticia, connection, callback) {
        sql = "SELECT * FROM noticias WHERE id = " + idNoticia;
        connection.query(sql, callback);
    };

    me.saveNoticia = function(connection, callback) {
        sql = "SELECT * FROM noticias WHERE id = " + idNoticia;
        connection.query(sql, callback);
    };

    me.editNoticia = function(idNoticia, connection, callback) {
        sql = "SELECT * FROM noticias WHERE id = " + idNoticia;
        connection.query(sql, callback);
    };

    return me;
};