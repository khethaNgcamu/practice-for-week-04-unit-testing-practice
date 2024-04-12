function isFive(num) {
  // Your code here
  return num === 5 
}

function isOdd(number) {
  // Your code here
  if(typeof number !== "number"){
    throw new Error("Input is not a number.");
  }

  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  // Your code here
  if (typeof min !== "number" || typeof max !== "number" || typeof step !== "number") {
    throw new Error("Inputs must be numbers.");
  }
  
  if(min > max){
    return [];
  }
const range = [];
  for(let i = min; i <= max; i += step){
    range.push(i);
  }
  return range;
}


module.exports = { isFive, isOdd, myRange };