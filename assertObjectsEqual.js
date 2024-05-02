// function that compares two objects
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) !== true) {   // ??change to this: (!eqArrays(object1[key], object2[key]))
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};


// function will take in two objects and
// console.log an appropriate message to the console.
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;   // util library's inspect function so we can display the objects 
  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🔴 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
  };

  

  assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }); // should pass
  assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 6, b: 2, c: 3 }); // should fail 
  assertObjectsEqual({}, {}); // should pass