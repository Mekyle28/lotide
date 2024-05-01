const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.lenght; i++)
      if (arr1[i] === arr2[1]) {
        return true;
      }
  }
  return false;
};

// my first attempt that converted them to strings to compare
// const eqArrays = function(arr1, arr2) {
//   if (arr1.join(", ") === arr2.join(", ")) {
//     return true;
//   } else {
//     return false;
//   }
// };


// test case
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 6, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1, 2, 3, 5, 10, 100], [1, 2, 3, 5, 10, 100]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(["the", "dog" ], ["the", "dog"]), true);
assertEqual(eqArrays(["the", "dog" ], ["the", "cat"]), false);
assertEqual(eqArrays([1, 23], [12, 3]), false);
