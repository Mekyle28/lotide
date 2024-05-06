const assertArraysEqual = require("/home/labber/lighthouse/lotide/assertArraysEqual");
const eqArrays = require("/home/labber/lighthouse/lotide/eqArrays");

// function takes a string and returns an object with the
// index value for each letter in the string
const letterPositions = (string) => {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if (!results[string[i]]) {
        results[string[i]] = [];
      }
      results[string[i]].push(i);
    }
  }
  return results;
};

//test code
console.log("letterPositions test:");
console.log(letterPositions(""));

let object = letterPositions("hello");

assertArraysEqual(object["h"], [0]);
assertArraysEqual(object["e"], [1]);
assertArraysEqual(object["l"], [2, 3]);
assertArraysEqual(object["o"], [4]);
