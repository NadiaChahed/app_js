const http = require('http');
const PORT = 3000;
const VERSION = process.env.APP_VERSION || 'v1';

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello from Swarm — ${VERSION}\n`);
}).listen(PORT, () => console.log(`Listening on ${PORT}`));
