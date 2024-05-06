const eqObjects = require("/home/labber/lighthouse/lotide/eqObjects"); 


// function will take in two objects and
// console.log an appropriate message to the console.
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;   // util library's inspect function so we can display the objects 
  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🔴 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
  };

  
// tests 
console.log("assertobjectsEqual tests:");
  assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }); // should pass
  assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 6, b: 2, c: 3 }); // should fail 
  assertObjectsEqual({}, {}); // should pass
  console.log("-----------");

  module.exports = assertObjectsEqual;
  // paste this into file to use this function 
  //const assertObjectsEqual = require("/home/labber/lighthouse/lotide/assertObjectsEqual"); 
  