
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
  
const assertArraysEqual = function(arrActual, arrExpected) {
  if (eqArrays(arrActual, arrExpected) === true) {
    console.log(`✅The arrays [${arrActual}] and [${arrExpected}] are equal`);
  } else {
    console.log(`🔴The arrays [${arrActual}] and [${arrExpected}] are not equal`);
  }
};

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

// test case
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // should pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // should pass
assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]); // should pass
assertArraysEqual(without([], [1, 2, "3"]), []); // should pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2", "3"]); // should fail



//Write a test case to make sure that the original array is not modified.
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
