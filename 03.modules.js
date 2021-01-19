//npm init-y : node파일로 만듦 - package.json 만들어짐
//npm i moment..

//git에 올릴 때는 node_modules 올릴 필요X, npm에 있기 때문에 내가 관리할 파일 아님
//.gitignore파일 만들어서 git에 올리지 않을 파일 적음 (/node_modules)
/* 
git에 올라와있는 파일 다시 깔 때는 node_modules파일 없지만
package jason에 다 기록돼 있기 때문에 npm i하면 깔림
 */

//실행할 때는 (node 03.modules)


const express = require('express');
const app = express();

app.listen(3000, () => {console.log('http://127.0.0.1:3000')});

app.get('/', (req, res) => {
	res.send('<h1>Hello root!</h1>');
});

app.get('/eunjeong', (req, res) => {
	res.send('<h1>Hello eunjeong!</h1>');
});

app.use((req, res) => {
	res.send('<h1>Error 404</h1><p>File not found!</p>');
});