const http = require('http');       
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html')
const chat = fs.readFileSync('./chat.html')
const about = fs.readFileSync('./about.html')

const server = http.createServer((req, res) => {
    console.log(req.url)
    url=req.url;                // so that the returning resquet can be the new url
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url=='/'){                           // if esle ladder fro diffent pages
        res.end(home);
    }
    else if(url=='/chat'){
        res.end(chat);
    }
    else if(url=='/about'){
        res.end(about);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });