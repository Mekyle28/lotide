const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};



// test
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([10, "hi", "100"]), 10);
assertEqual(head([10]), 10);
assertEqual(head([]),);