const sum = (a, b) => {
	return a + b;
}

const sub = (a, b) => {
	return a - b;
}

module.exports = { sum, sub };
//객체를 내보냄
//다른 곳에서 부를 수 있음
//module, exports는 node에서 만들어진 것