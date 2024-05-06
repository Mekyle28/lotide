const eqArrays = require("/home/labber/lighthouse/lotide/eqArrays"); 

// this function checks if two arrays are equal and logs the result.
const assertArraysEqual = function(arrActual, arrExpected) {
  if (eqArrays(arrActual, arrExpected)) {
    console.log(`✅The arrays [${arrActual}] and [${arrExpected}] are equal`);
  } else {
    console.log(`🔴The arrays [${arrActual}] and [${arrExpected}] are not equal`);
  }
};


// // test cases
console.log("assertArraysEqual tests: ");
assertArraysEqual([1, 2, 3], [1, 2, 3]); // are equal

assertArraysEqual([1, 2, 3], [1, 2]); // not equal

assertArraysEqual([], []); // equal

assertArraysEqual(["i'm", "so", "tired"], ["i'm", "so", "tired"]); // equal

assertArraysEqual(["i'm", "so", "tired"], ["i'm", "so", "sleepy"]); // not equal
console.log("------------");


module.exports = assertArraysEqual;
// paste this into file to use this function 
//const eqArrays = require("/home/labber/lighthouse/lotide/assertArraysEqual"); 