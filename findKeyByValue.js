const assertEqual = require("/home/labber/lighthouse/lotide/assertEqual");

// function that takes an object and a value and returns the
// first key that contains the value
const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

// test case
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log("findKeyByValue tests:");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
