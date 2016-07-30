/**
 Challenge link: https://www.reddit.com/r/dailyprogrammer/comments/4q35ip/20160627_challenge_273_easy_getting_a_degree/?st=ir9la2m9&sh=736033b7
 This one was pretty easy to resolve of course (I liked a lot!). 
 It's easy to scale and it can be adapted to the Open/Close principle without problem.

 Others solution that I liked :
 https://www.reddit.com/r/dailyprogrammer/comments/4q35ip/20160627_challenge_273_easy_getting_a_degree/d4pucra?st=ir9lefnv&sh=ce579ffe
 https://www.reddit.com/r/dailyprogrammer/comments/4q35ip/20160627_challenge_273_easy_getting_a_degree/d4r1d2g?st=ir9li5me&sh=03347343
 */       
function convert(unit){
  var unitDegree = unit.charAt(unit.length-2);
  var unitToConvert = unit.charAt(unit.length-1);
  var unitInNumber = parseInt(unit.slice(0,(unit.length-2)));
  
  var convertFunctionName = unitDegree+"TO"+unitToConvert;
  
  if(window[convertFunctionName]){
    return (window[convertFunctionName](unitInNumber))+unitToConvert;
  }
  
  return "No candidate for conversion"
  
}

function dTOr(d){
  return (3.14/180)*d;
}

function rTOd(r){
  return r * (180/3.14);
}

function cTOf(c){
  return c * 9/5 +32;
}

function cTOk(c){
  return c + 273.15;
}

function fTOc(f){
  return (f - 31) * 5/9;
}

function fTOk(f){
  return (f + 459.67) * 5/9;
}

function kTOc(k){
  return k - 273.15;
}

function kTOf(k){
  return k * 9/5 - 459.67;
}
