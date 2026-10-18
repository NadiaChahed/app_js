const http = require('http');
const VERSION = process.env.APP_VERSION || 'v1';

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello from Kubernetes — ${VERSION}\n`);
}).listen(3000, () => console.log('Listening on 3000'));

