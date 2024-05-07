const _ = require("../index");

// test code
console.log("countLetters test: object (letters-numbers)");
console.log(_.countLetters("I really hope this works"));
console.log(_.countLetters("watermelon"));
console.log(_.countLetters(""));

console.log("countLetters test: assert=");
let result2 = _.countLetters("A cat");

_.assertEqual(result2["a"], 1);
_.assertEqual(result2["c"], 1);
_.assertEqual(result2["t"], 1);
_.assertEqual(result2["A"], 1);