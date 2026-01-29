const http = require('http');

const server = http.createServer((req, res) => {
  // Set headers explicitly
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  
  // Send response body
  res.end('Fampinion Web App — Phase 22');
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
