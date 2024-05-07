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


  module.exports = assertObjectsEqual;
 
  