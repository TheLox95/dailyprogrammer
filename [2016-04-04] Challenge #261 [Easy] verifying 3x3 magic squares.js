//Challenge link: https://www.reddit.com/r/dailyprogrammer/comments/4dccix/20160404_challenge_261_easy_verifying_3x3_magic/
// Bonus 1 Complete! thought need to be tested LOL!

// TODO: Test bonus 1
function getRightToBottomSum(matrix){
    var lengh = matrix.length;
    var sum = 0;
    for(var i=0;i<lengh;i++){
        sum = sum + matrix[i][i];
    }
  return sum;
}

function getLeftToBottomSum(matrix){
    var lengh = matrix.length;
  var sum = 0;
  var token = 0;
  for(var i=0;i<lengh;i++){
    sum = sum + matrix[token][i];
    token++;
  }
  return sum;
}

function isMagicSquare(square){
    var rToBDiagonalSum = getRightToBottomSum(square);
    var lToBDiagonalSum = getLeftToBottomSum(square);

  if(rToBDiagonalSum != 15 || lToBDiagonalSum != 15){
  return false;
  }

  return true;
}

console.log(isMagicSquare([[2,7,6],[9,5,1],[4,3,8]]));
