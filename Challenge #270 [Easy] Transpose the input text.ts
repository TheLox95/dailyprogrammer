// https://www.reddit.com/r/dailyprogrammer/comments/4msu2x/challenge_270_easy_transpose_the_input_text/?st=is3n6ba5&sh=72b38604

function getLongestLineAmountLetter(lines){
  var amounts = lines.map((item) => {return item.length});
  return Math.max.apply(Math, amounts);
}

function transpose(text){
  let textToPrint = "";
  let lines = text.split("\n");
  let linesAmount = lines.length;
  let longestLineAmountLetters = getLongestLineAmountLetter(lines);
  
  let i = -1;  
  while(i++ < longestLineAmountLetters - 1){
    for(let b = 0; b < linesAmount; b++){
      if(lines[b][i] != undefined){
        textToPrint += lines[b][i];
      }else{
        textToPrint += " ";
      }
    }
    textToPrint += "\n";
  }
  
  console.log(textToPrint);  
}



let textToTranspose = `package main

import "fmt"

func main() {
    queue := make(chan string, 2)
    queue <- "one"
    queue <- "twoO"
    close(queue)
    for elem := range queue {
        fmt.Println(elem)
    }
}`;

transpose(textToTranspose);