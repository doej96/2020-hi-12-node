const http = require('http');
const server = http.createServer(onCreateServer);
server.listen(3000, () => { console.log('http://127.0.0.1:3000') });
//3000번 포트 listen하고 있다가 req 들어오면

function onCreateServer(req, res) {
	if(req.url == '/') {
		res.end('Hello root');
	}else if(req.url == '/eunjeong') {
		res.end('Hello eunjeong');
	}else {
		res.end('File not found!')
	}
	//console.log(req); //요청만 있고 답변 없는 상태
	//res.end('Hello'); //답변 있음
};