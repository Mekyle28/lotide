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

const assertArraysEqual = function(result) {
  if (result === true) {
    console.log(`✅The arrays are equal`);
  } else {
    console.log(`🔴The arrays are not equal`);
  }
};

// function takes a string and returns an object with the
// index value for each letter in the string
const letterPositions = function(sentence) {
  const results = {};
  let sentenceArr = sentence.split("");
  for (let i = 0; i < sentence.length; i++) {
    if (sentenceArr[i] !== " ") {
      if (results[sentenceArr[i]]) {
        results[sentenceArr[i]].push(i);
      } else {
        results[sentenceArr[i]] = [];
        results[sentenceArr[i]].push(i);
      }
    }
  }
  return results;
};

//test code
console.log((letterPositions("")));

let object = (letterPositions("hello"));

assertArraysEqual(eqArrays(object["h"], [0]));
assertArraysEqual(eqArrays(object["e"], [1]));
assertArraysEqual(eqArrays(object["l"], [2, 3]));
assertArraysEqual(eqArrays(object["o"], [4]));




