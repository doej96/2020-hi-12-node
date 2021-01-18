//node는 브라우저에서 돌릴 필요 없기 때문에 html 돌릴 필요없음.
//대신 html에서는 src로 제이쿼리 등 가져와서 그 함수를 같이 썼는데 node에서는?
//터미널 창에 npm i moment/lodash/express..

/**
 * ? const calc = require('./02.util')  */

// calc = 불러옴(exports로 내보낸 것이 옴)
// './'필수, '.js'는 생략가능
/**
 * ? console.log( calc.sum(10, 20) );
 * ? console.log( calc.sub(100, 50) ); */ 

const { sum, sub } = require('./02.util'); //구조분해할당

console.log(sum(10,20));

const http = require('http');
const os = require('os');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.end('<meta charset="utf-8"><h1>안녕하세요</h1>');
});

//console.log( os.cpus() );
//console.log( os.freemem() );
console.log( fs.readFileSync('c:/test.txt').toString() );
console.log( fs.copyFileSync('c:/test.txt', 'c:/test2.txt') );

const arr = [1,5,7,22,6,9,4];
console.log(_.sortBy(arr));

server.listen(1000, '127.0.0.1'); //내 컴퓨터(127.0.0.1)의 1000번 포트에서 돌림