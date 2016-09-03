'use strict'
//https://www.reddit.com/r/dailyprogrammer/comments/45w6ad/20160216_challenge_254_easy_atbash_cipher/
function getOpposeLetterOrSameCharacter(letter){
    let dictionary = {"a":"z",
        "b":"y",
        "c":"x",
        "d":"w",
        "e":"v",
        "f":"u",
        "g":"t",
        "h":"s",
        "i":"r",
        "p":"k",
        "j":"q",
        "k":"p",
        "l":"o",
        "m":"n",
        "n":"m",
        "o":"l",
        "p":"k",
        "q":"j",
        "r":"i",
        "s":"h",
        "t":"g",
        "u":"f",
        "v":"e",
        "w":"d",
        "x":"c",
        "y":"b",
        "z":"a"};

    let wordToReturn = letter;
    letter = letter.toLowerCase();

    if (dictionary[letter]) {
        wordToReturn = /[A-Z]/.test(letter) ? dictionary[letter].toUpperCase():dictionary[letter];
    }

    return wordToReturn;
}

function decript(word){

    let wordDecripted = "";

    for (var a = 0; a < word.length; a++) {
        let currentLetter = word[a];

        wordDecripted += getOpposeLetterOrSameCharacter(currentLetter);
    }

    return wordDecripted;

}

console.log(decript("foobar"));
console.log(decript("wizard"));
console.log(decript("/r/dailyprogrammer"));
console.log(decript("gsrh rh zm vcznkov lu gsv zgyzhs xrksvi"));
