'use strict'
// https://www.reddit.com/r/dailyprogrammer/comments/56tbds/20161010_challenge_287_easy_kaprekars_routine/?st=iubozp41&sh=5d8af626

function numberToArrNumber(num){
	return num.toString().split("").map((item) => {
		return parseInt(item);
	});
}

function largestDigit(num){
	num = numberToArrNumber(num);

	let hightNumber = num[0];
	for (let i = 0; i < num.length; i++) {
		if (num[i+1] > hightNumber) {
			hightNumber = num[i+1];
		}
	}

	return hightNumber
}

function descDigit(num){
	num = numberToArrNumber(num);
	num.length < 4 ? num.push(0) : num;
	let descArray = [];

	for (let i = 0; i < 4; i++) {
		let highNumber = largestDigit(num)
		descArray.push(highNumber);

		let highNumberIndex = num.findIndex((highNumber) => {
			return highNumber === descArray[descArray.length-1];
		})
		num.splice(highNumberIndex,1);
	}

	return descArray.join(``);
}

function ascDigit(num){
	num = numberToArrNumber(num);
	num.length < 4 ? num.push(0) : num;
	let ascArray = [];

	for (let i = 0; i < 4; i++) {
		let highNumber = largestDigit(num)
		ascArray.unshift(highNumber);

		let highNumberIndex = num.findIndex((highNumber) => {
			return highNumber === ascArray[0];
		})
		num.splice(highNumberIndex,1);
	}

	return ascArray.join(``);
}

function kaprekar(num){
	let kaprekarConst = 6174;
	let result = 0;
	let amountIterations = 0;

	while(kaprekarConst !== num){
		num = descDigit(num) - ascDigit(num);
		amountIterations++;
		if (num === 0) return 0;
	}
	
	return amountIterations;
}

function print(numOperated){
	return `-----------------------------------------------------
	Number use for operation: ${numOperated} 
	Highest:${largestDigit(numOperated)}
	Descending number: ${descDigit(numOperated)}
	Amount of Kaprekar iterations: ${kaprekar(numOperated)}
-----------------------------------------------------`;
}

console.log(print(1234));
console.log(print(3253));
console.log(print(9800));
console.log(print(3333));
console.log(print(120));
