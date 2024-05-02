// this function checks if two arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i]) {
      return false;
    }
      
  return true;
};

// this function checks if two arrays are equal and logs the result.
const assertArraysEqual = function(arrActual, arrExpected) {
  if (eqArrays(arrActual, arrExpected) === true) {
    console.log(`✅The arrays [${arrActual}] and [${arrExpected}] are equal`);
  } else {
    console.log(`🔴The arrays [${arrActual}] and [${arrExpected}] are not equal`);
  }
};

// function takes a string and returns an object with the
// index value for each letter in the string
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

//test code
console.log((letterPositions("")));

let object = (letterPositions("hello"));

assertArraysEqual(object["h"], [0]);
assertArraysEqual(object["e"], [1]);
assertArraysEqual(object["l"], [2, 3]);
assertArraysEqual(object["o"], [4]);




