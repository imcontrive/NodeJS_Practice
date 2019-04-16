var http = require('http');
http.createServer((req,res) => {
  console.log(req.headers);
  res.end("HELLO World");
}).listen(2000);