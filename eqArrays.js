const assertEqual = require("/home/labber/lighthouse/lotide/assertEqual");

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  return true;
};

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

module.exports = eqArrays;

// //my first attempt that converted them to strings to compare
// const eqArrays = function(arr1, arr2) {
//   if (arr1.join(", ") === arr2.join(", ")) {
//     return true;
//   } else {
//     return false;
//   }
// };
