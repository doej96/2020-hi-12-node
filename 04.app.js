const express = require('express');

const app = express();

//console.log(app); //app은 jquery의 $같은,,
app.listen(3000, () => {console.log('http://127.0.0.1:3000')});

app.get('/', (req, res) => {
	res.send('<h1>Hello root</h1>');
});

app.get('/eunjeong', (req, res) => {
	res.send('<h1>Hello eunjeong</h1>');
});

app.use((req, res) => {
	res.send('<h1>Error 404</h1><p>File not found</p>');
});