var http = require('http');
http.createServer((req,res) => {
  // console.log(req.headers);
  // res.setHeader('Content-Type', 'text/html')
  res.write("shashi")
  res.end("<h2>HELLO World</h2>");
}).listen(2000);