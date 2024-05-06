const assertEqual = require("/home/labber/lighthouse/lotide/assertEqual");

// function counts how many times a letter shows up in a string and returns an object
const countLetters = function (string) {
  const results = {};
  const stringNoSpaces = string.split(" ").join(""); // removes the spaces
  for (let letter of stringNoSpaces) {
    if (!results[letter]) {
      results[letter] = 0; // Increases the letter count by 1 if the letter is already in the object
    }
    results[letter]++; //adds letter to the object
  }
  return results;
};

// test code
console.log("countLetters test: object (letters-numbers)");
console.log(countLetters("I really hope this works"));
console.log(countLetters("watermelon"));
console.log(countLetters(""));

console.log("countLetters test: assert=");
let result2 = countLetters("A cat");

assertEqual(result2["a"], 1);
assertEqual(result2["c"], 1);
assertEqual(result2["t"], 1);
assertEqual(result2["A"], 1);
