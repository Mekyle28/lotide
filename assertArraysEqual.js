const eqArrays = require("/home/labber/lighthouse/lotide/eqArrays"); 

// this function checks if two arrays are equal and logs the result.
const assertArraysEqual = function(arrActual, arrExpected) {
  if (eqArrays(arrActual, arrExpected)) {
    console.log(`✅The arrays [${arrActual}] and [${arrExpected}] are equal`);
  } else {
    console.log(`🔴The arrays [${arrActual}] and [${arrExpected}] are not equal`);
  }
};

module.exports = assertArraysEqual;
