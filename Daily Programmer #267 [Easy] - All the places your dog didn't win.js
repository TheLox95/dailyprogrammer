/*
* Description:
* Your dog just won X place in a dog show, congratulations! 
* You post your star's photo and placement announcement to /r/aww and, predictably, 
* a funny redditor asks what places the rest of the participating dogs took. 
* Your job is to create a program that lists all places within the range of 0-100 in spoken English, 
* excluding the placing (X) of your winning pup.
*
* Input description:
* Input is the integer placement of your dog (X) within the range 0-100.
*
* Output description:
* A reader should see a neatly formatted list of placements from 0-100 in spoken English, excluding your dog's placement.
* Here's an example in the case of a 1st place finish;
* 0th, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th, 
* 11st, 12nd, 13rd, 14th, 15th, 16th, 17th, 18th, 19th, 
* 20th, 21st, 22nd, 23rd, 24th, 25th, 26th, 27th, 28th, 29th, 
* 30th, 31st, 32nd, 33rd, 34th, 35th, 36th, 37th, 38th, 39th, 
* 40th, 41st, 42nd, 43rd, 44th, 45th, 46th, 47th, 48th, 49th, 
* 50th, 51st, 52nd, 53rd, 54th, 55th, 56th, 57th, 58th, 59th, 
* 60th, 61st, 62nd, 63rd, 64th, 65th, 66th, 67th, 68th, 69th, 
* 70th, 71st, 72nd, 73rd, 74th, 75th, 76th, 77th, 78th, 79th, 
* 80th, 81st, 82nd, 83rd, 84th, 85th, 86th, 87th, 88th, 89th, 
* 90th, 91st, 92nd, 93rd, 94th, 95th, 96th, 97th, 98th, 99th, 
* 100th, 101st
*
* Bonus:
* Bonus 1) Allow scaling greater than 100 placings
* Bonus 2) Exclude 0th place
* Bonus 3) Accurately represent the unique cases 11, 12, and 13
*/


function print(position, places /* BONUS 1 */){
  var sufix = "";
  var message = "";
  
  if(position > places){
    return "The position is bigger than the places available";
  }
  
  for(var i = 1 /* BONUS 2 */; i<=places; i++){
    var lastDigitInString = i.toString().substr(i.toString().length-1);
    var lastDigitInNumber = Number(lastDigitInString);
    
    if(position != i){
      if(
       i < 20 & i > 10 || // BONUS 3!
       lastDigitInNumber === 0 ||
       lastDigitInNumber >= 4 & lastDigitInNumber <= 9
      ){
      sufix = "th";
      }else if(lastDigitInNumber === 1){
        sufix = "st";
      }else if(lastDigitInNumber === 2){
        sufix = "nd";
      }else if(lastDigitInNumber === 3){
        sufix = "rd";
      }
      
      if( i != places){
        message += i + sufix + ", ";
      }else{
        message += i + sufix;
      }
      
    }
  }
  return message;
}

console.log(print(30,200));
