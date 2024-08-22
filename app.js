const http = require('http');
const fs = require('fs');
const path = require('path');

// Server setup
const app = http.createServer((req, res) => {
    // Route handling
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write("This is the Home Page.");
            res.end();
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write("This is the About Page.");
            res.end();
            break;
        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write("This is the Contact Page.");
            res.end();
            break;
        case '/file-write':
            const filePath = path.join(__dirname+'/public/', 'demo.txt');
            fs.writeFile(filePath, 'hello world', err => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write(`File ${filePath} has been saved.`);
                res.end();
            });
            break;
        default:
            res.writeHead(404);
            res.end();
    }
});

app.listen(5500, () => {
    console.log('Server running at http://localhost:5500/');
});