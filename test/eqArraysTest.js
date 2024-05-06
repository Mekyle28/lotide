const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// test case
console.log("eqArrays test");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 6, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1, 2, 3, 5, 10, 100], [1, 2, 3, 5, 10, 100]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(["the", "dog"], ["the", "dog"]), true);
assertEqual(eqArrays(["the", "dog"], ["the", "cat"]), false);
assertEqual(eqArrays([1, 23], [12, 3]), false);
console.log("-----------");
