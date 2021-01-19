//서버를 띄우지않으면 dirname 안나옴
//노드의 정적변수
//console.log('__dirname: '+ __dirname); //절대주소
//console.log('__filename: '+ __filename); //절대경로로 현재 돌고있는 파일이 나옴
//console.log('path.join(): '+ path.join(__dirname, '../../')); //현재 절대주소에서 ../../로 감
//console.log('path.join(): '+ path.join(__dirname, './public'));

//get, post, use가 라우터(표지판)임

const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {console.log('http://127.0.0.1:3000')}); //콘솔.로그는 터미널창에서 클릭하기위해 만든 것

app.use('/', express.static( path.join(__dirname, 'public') )); //C:\도은정-수업\12.node\public이 정적폴더로
//루트로 들어오면 정적인폴더인 public로 보냄

app.use((req, res) => {
	const html = `
	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>File not found</title>
		</head>
	<body style="margin: 10% 0 0 10%">
		<h1>Error 404</h1>
		<p>파일을 찾을 수 없습니다.</p>
	</body>
	</html>`;
	res.send(html);
})