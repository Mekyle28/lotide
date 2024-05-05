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
  if (eqArrays(arrActual, arrExpected)) {
    console.log(`✅The arrays [${arrActual}] and [${arrExpected}] are equal`);
  } else {
    console.log(`🔴The arrays [${arrActual}] and [${arrExpected}] are not equal`);
  }
};


// test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // are equal

assertArraysEqual([1, 2, 3], [1, 2]); // not equal

assertArraysEqual([], []); // equal

assertArraysEqual(["i'm", "so", "tired"], ["i'm", "so", "tired"]); // equal

assertArraysEqual(["i'm", "so", "tired"], ["i'm", "so", "sleepy"]); // not equal

