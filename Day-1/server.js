const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello, Word!');
});
const PORT = 3000;
server.listen(PORT,() => {
    console.log(`Greeting Booth is open at http://localhost:${PORT}/`);
});