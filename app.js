const http = require('http');

http.createServer((req, res) => {
  res.end("Hello Nilesh from Jenkins CI/CD 🚀");
}).listen(3000);
