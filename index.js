var http = require('http');

var server = http.createServer(function (req, res) {
  var url = req.url;
  console.log(url);
  if (url === '/tecnologia') {
      res.end('<html><body>Noticias de tecnologia</body></html>');
  } else if (url === '/moda') {
    res.end('<html><body>Noticias de moda</body></html>');
  } else if (url === '/beleza') {
    res.end('<html><body>Noticias de beleza</body></html>');
  } else {
    res.end('<html><body>Portal de noticias com nodejs</body></html>');
  }
}).listen(3000);
