const http = require('http');  //node_modules에서 참조해오는 건 주소 필요 없음, 내가 만든 건 주소 필요

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//open with live server : node로 짠 것임
//node는 자바스크립트를 브라우저 밖에서 실행할 수 있도록 하는 자바스크립트 실행기