const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function counts how many times a letter shows up in a string and returns as an object
const countLetters = function(string) {
  let results = {};
  let stringNoSpaces = string.split(" ").join(""); // removes the spaces
  for (let letter of stringNoSpaces) {
    if (results[letter]) {
      results[letter] += 1;   // Increses the letter count by 1 if the letter is already in the object
    } else {
      results[letter] = 1;   //adds letter to the object
    }
  }
  return results;
};

// test code
console.log(countLetters("I really hope this works"));
console.log(countLetters("watermelon"));
console.log(countLetters(""));


let result2 = countLetters("A cat");

assertEqual(result2["a"], 1);
assertEqual(result2["c"], 1);
assertEqual(result2["t"], 1);
assertEqual(result2["A"], 1);

