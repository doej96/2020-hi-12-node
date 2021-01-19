const express = require('express');

const app = express();

//console.log(app); //app은 jquery의 $같은,,
app.listen(3000, () => {console.log('http://127.0.0.1:3000')});

app.get('/', (req, res) => {
	var html = `
	<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>고골</title>
</head>
<body style="text-align: center; padding-top: 10em">
	<h1>GOGOL</h1>
	<form method="get" action="/search">
		<input type="text" name="q" style="padding: 0.5em">
		<button style="padding: 0.45em 3em">검색</button>
	</form>
</body>
</html>`;
//static(정적 html, 위의 html), dynamic(동적 html, 아래의 html)
	res.send(html);
});

app.get('/search', (req, res) => {
	//데이터가 서버 안에서 만들어서 나가면 백엔드, 브라우저에서 받아서 만들어지면 프론트엔드
	const q = req.query.q;
	//서버에서 검색하는 로직
	const result = [
		{title: '결과1', content: '결과입니다.'},
		{title: '결과2', content: '결과입니다.'},
		{title: '결과3', content: '결과입니다.'},
	];
	var html = `
	<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>고골</title>
</head>
<body style="padding: 2em">
	<h1>GOGOL</h1>
	<form method="get" action="/search">
		<input type="text" name="q" value="${q}" style="padding: 0.5em">
		<button style="padding: 0.45em 3em">검색</button>
	</form>
	<ul>`;
		for(var v of result) {
			html += `<li>${q}의${v.title}: ${v.content}</li>`
		}
		html += `</ul>
	</body>
	</html>`;
	res.send(html);
})

app.get('/eunjeong', (req, res) => {
	res.send('<h1>Hello eunjeong</h1>');
});

app.use((req, res) => {
	res.send('<h1>Error 404</h1><p>File not found</p>');
}); //순서 중요! app.use가 맨 앞에 있으면 root, eunjeong도 error가 뜸


//get(주소줄로 서버에 요청), post(로그인은 주소줄에 정보 나타나면 안되기 때문에 로그인, 파일전송 등은 post)
//app.get => get방식으로 요청
//app.post => post방식으로 요청
//app.use : get, post 상관없이 받음

//npm i firebase-tools : 이 파일 내에서만 쓸 수 있음
//npm i -g firebase-tools : 이 컴퓨터 전체에서 쓸 수 있음
//global 모드 : 보통 command창에서 쓸 수 있는 프로그램을 글로벌모드로 깐다
//삭제할 때 : npm uninstall firebase-tools

//npm i -g nodemon -> nodemon 04.app (수정사항 자동 적용)