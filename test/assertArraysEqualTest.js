const assertArraysEqual = require("../assertArraysEqual"); 


// // test cases
console.log("assertArraysEqual tests: ");
assertArraysEqual([1, 2, 3], [1, 2, 3]); // are equal

assertArraysEqual([1, 2, 3], [1, 2]); // not equal

assertArraysEqual([], []); // equal

assertArraysEqual(["i'm", "so", "tired"], ["i'm", "so", "tired"]); // equal

assertArraysEqual(["i'm", "so", "tired"], ["i'm", "so", "sleepy"]); // not equal
console.log("------------");