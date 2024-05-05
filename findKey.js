const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
};

// function that takes an object and a callback and returns the
// first key for which the callback returns a truthy value.
const findKey = function (object, callback) {
  let valueKey = undefined;
  for (let key in object) {
    if (callback(object[key])) return key;
  }
  return valueKey;
};

// test case
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
); // => "noma"

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 4
  ),
  undefined
);
