'use strict'

function isAnagram(sentence){

    let wordOne = sentence.split('?')[0];
    wordOne = (wordOne.replace(/["'\s]/g,``)).toLowerCase();
    let wordTwo = sentence.split('?')[1];
    wordTwo = (wordTwo.replace(/["'\s]/g,``)).toLowerCase();
    
    for(let a = 0;a<wordOne.length;a++){
    	if (wordOne.includes(wordTwo[a]) == false){
			return `${sentence.split('?')[0]} is NOT an anagram of ${sentence.split('?')[1]}`;
		}		
    }

    for (let b =0;b<wordTwo.length;b++) {
    	if (wordTwo.includes(wordOne[b]) == false){
    		return `${sentence.split('?')[0]} is NOT an anagram of ${sentence.split('?')[1]}`;
    	}	
    }

    return `${sentence.split('?')[0]} is an anagram of ${sentence.split('?')[1]}`;

}

console.log(isAnagram('"wisdom" ? "mid sow"'));
console.log(isAnagram('"Seth Rogan" ? "Gathers No"'));
console.log(isAnagram('"Reddit" ? "Eat Dirt"'));
console.log(isAnagram('"Schoolmaster" ? "The classroom"'));
console.log(isAnagram('"Astronomers" ? "Moon starer"'));
console.log(isAnagram('"Vacation Times" ? "I\'m Not as Active"'));
console.log(isAnagram('"Dormitory" ? "Dirty Rooms"'));
