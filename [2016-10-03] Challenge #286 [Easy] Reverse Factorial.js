'use strict'
function reverseFactorial(num){
	let divisionBase = 1;

	while(num > 1){
		divisionBase++;
		num /= divisionBase;
	}

	return num === 1 ? `${divisionBase}!` : `NONE!`;
}

console.log(reverseFactorial(3628800));
console.log(reverseFactorial(479001600));
console.log(reverseFactorial(6));
console.log(reverseFactorial(18));