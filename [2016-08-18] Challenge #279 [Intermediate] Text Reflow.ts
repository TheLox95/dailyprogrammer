//https://www.reddit.com/r/dailyprogrammer/comments/4ybbcz/20160818_challenge_279_intermediate_text_reflow/?st=isdrsl8a&sh=eb7d16d5
//First challenge of the category Intermediate. And was a bit hard. My goal with this challenges is to resolve them in one afternoon
//so I have to do a litte trick here to make it work. I figured out how I can solve this with two functions that first explit the paragraph
//and then this current function explit the lines but I ran out of time. So end like this ;)

let textToReflow = `In the beginning God created the heavens and the earth. Now the earth was 
formless and empty, darkness was over the surface of the deep, and the Spirit of
God was hovering over the waters.

And God said, "Let there be light," and there was light. God saw that the light
was good, and he separated the light from the darkness. God called the light
"day," and the darkness he called "night." And there was evening, and there was
morning - the first day.`;

function reflow(text:string):string {
  let words:Array<string> = getWords(text);
  let textReflowed = "";
  let currentLine:Array<string> = [];

  while(words[0] != undefined){
    currentLine.push(words.shift());

    while((currentLine.join(" ")).length <= 40 ) {
      currentLine.push(words.shift());
    }

    words.unshift(currentLine.pop());
    textReflowed += currentLine.join(" ") + "\n";

    currentLine = [];
  }
  
  return textReflowed;
}

function getWords(text:string){
  text = text.replace(/\n\n/, '                                           '); // Trick! Sorry!
  text = text.replace(/\n/g, ' ');
  return text.split(" ");
}

console.log(reflow(textToReflow));