// const eqArrays = function(arr1, arr2) {
//   if (arr1.join(", ") === arr2.join(", ")) {
//     return true;
//   } else {
//     return false;
//   }
// };
  

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
    console.log(`The arrays are equal`);
  } else {
    console.log(`The arrays are not equal`);
  }
};

// test cases
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // are equal

assertArraysEqual(eqArrays([1, 2, 3], [1, 2])); // not equal

assertArraysEqual(eqArrays([], [])); // equal

assertArraysEqual(eqArrays(["i'm", "so", "tired"], ["i'm", "so", "tired"])); // equal

assertArraysEqual(eqArrays(["i'm", "so", "tired"], ["i'm", "so", "sleepy"])); // not equal

