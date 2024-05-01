const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
const eqArrays = function(arr1, arr2) {
  if (arr1.join(", ") === arr2.join(", ")) {
    return true;
  } else {
    return false;
  }
};


// test case
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 6, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), true);
assertEqual(eqArrays([1, 2, 3, 5, 10, 100], [1, 2, 3, 5, 10, 100]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(["the", "dog" ], ["the", "dog"]), true);
assertEqual(eqArrays(["the", "dog" ], ["the", "cat"]), true);

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.join(", "), ["Lighthouse", "Labs"].join(", "));