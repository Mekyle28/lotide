
// compares either two integers or strings and prints if they are equal.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
    return console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
};
module.exports = assertEqual;




// paste this into file to use this function 
// const assertEqual = require("/home/labber/lighthouse/lotide/assertEqual");