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
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true; //페이지소스보기 편하게

app.use('/', express.static( path.join(__dirname, 'public') )); //C:\도은정-수업\12.node\public이 정적폴더로
//루트로 들어오면 정적인폴더인 public로 보냄

app.get('/search', (req, res) => {
	const q = req.query.q;
	//res.render('search', { q }) //search.pug에 q=q로 보냄, 같으면 생략가능 -> q
	//view engine을 html로 렌더링, render안 주소는 이미 views안으로 설정돼있음(app.set(views))
	//search.pug로 감

	//검색결과 로직 - 미구현
	const lists = [
		{ title: `${q} 물산`, content: `${q}물산, ${q}물산`, src: '/img/ny.jpg'},
		{ title: `${q} 상사`, content: `${q}상사, ${q}상사`, src: '/img/paris.jpg'},
		{ title: `${q} 약국`, content: `${q}약국, ${q}약국`, src: '/img/la.jpg'},
		{ title: `${q} 식당`, content: `${q}식당, ${q}식당`, src: '/img/sanfran.jpg'}
	];
	res.render('search', {q, lists});
	//search.pug 에서
	/* 
	for in문, for of문 -> each v(변수) in lists(arr)
	title= v.title
	 */
})

app.get('/band', (req, res) => {
	const src = req.query.src;
	res.render('band', { src });
})

app.get('/main', (req, res) => {
	const pug = {css: 'main', js: 'main'}
	res.render('index', pug)
})

app.get('/about', (req, res) => {
	const pug = {css: 'about', js: 'about'}
	res.render('about', pug)
})

app.get('/pf', (req, res) => {
	const pug = {css: 'pf', js: 'pf'}
	res.render('pf', pug)
})

app.get('/contact', (req, res) => {
	const pug = {css: 'contact', js: 'contact'}
	res.render('contact', pug)
})

app.use((req, res) => {
	res.redirect('/html/404.html'); //여기서'/'는 public
})