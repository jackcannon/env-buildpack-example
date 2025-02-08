const http = require('http');

require('./print-env.js');

const port = Number(process.env.PORT) || 5000;
const server = http.createServer((req, res) => {
  console.log('request');
});
server.listen(port, 'localhost', undefined, () => {
  console.log('Listening');
});
