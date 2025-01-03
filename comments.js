// Create web server
// Create a web server that listens on port 8080 of your machine. 
// When it receives a request on /comments, it responds with the list of comments from the previous exercise. 
// The list of comments should be returned in JSON format. The server should respond to GET requests only.

const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
    if (req.url === '/comments' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});

