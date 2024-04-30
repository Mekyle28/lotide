const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array) {
  let tailArr = [];
  for (let i = 1; i < array.length; i++) {
    tailArr.push(array[i]);
  }
  return tailArr;
};


// the workaround they provided which compares each individual element in array


// //test case 1 
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); //ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure the first element is "Lighthouse"
assertEqual(result[1], "Labs"); //ensure second element is "Labs"



//my attempt, where I convert both to strings and compare them.
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.join(", "), ["Lighthouse", "Labs"].join(", "));


// const result = tail([]);
// assertEqual(result.join(", "), [].join(", "));