const http = require('http'); // built-in module

const server = http.createServer((req, res) => {
    //req: Incoming request {method, url, headers}
    //res: Outgoing response {write, end}

    if (req.method === 'GET' && req.url === '/'){
        // Manual route check
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello from the raw Node.js!' )
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Not found'); 
    }
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Raw server running on http://localhost:${PORT}`);

})