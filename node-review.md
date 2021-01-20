# node 설치 및 실행

## 1. 초기설정 및 프론트엔드
	- npm init -y
	- npm i express pug
	- public, views 폴더
	- 바깥에 app.js 파일
	- public/index.html -> meta http-equiv, content

## 2. BackEnd 구동

### app.js
	- const express path
	- app.listen
	- app.set (view, path.join __dirname)
	(- app.locals.pretty= true)
	- app.use('/', express.static(path.join(__dirname, 'public'))
	- app.get('/search', (req, res) => {

		const q = req.query.q
		const name = req.query.name
		=> const { q, name } = req.query

		res.send(`<h1>${q}</h1><h1>${name}</h1>`)
		// /search?q=node&name?=eunjeong
		// res.send, redirect, render
		})
### search.pug
	- h1 = q
	- p = name