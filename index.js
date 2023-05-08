const http = require('http');

const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
