const http = require('http')
const fs = require('fs')
const filecontent = fs.readFileSync('index.html')

const server = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-type':'text/html'});  //:text/plain (for plain text)
  res.end(filecontent);                             //:"Hello World" (above example)
})

server.listen(8000, '127.0.0.1',()=>{
    console.log('Listening on Port 8000');
})


