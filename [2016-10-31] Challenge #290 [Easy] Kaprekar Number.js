'use strict'

function kaprekar(first,last){
	let kaprekars = [];

	for(let i = first; i <= last; i++){
		let square = Math.pow(i,2);
		let stringSquare = square.toString();
		let stringSquareLength = stringSquare.length;

		let middleIndex = Math.floor(stringSquareLength/2);

		let firstHalf = parseFloat(stringSquare.substr(0,middleIndex));
		let secondHalf = parseFloat(stringSquare.substr(middleIndex,stringSquareLength));

		if (isNaN(firstHalf) == false && secondHalf > 0) {
			if(firstHalf+secondHalf == i){
				kaprekars.push(i);
			}
		}

	}

	return kaprekars;
}

console.log(kaprekar(1,50));
console.log(kaprekar(2,100));
console.log(kaprekar(101,9000));


