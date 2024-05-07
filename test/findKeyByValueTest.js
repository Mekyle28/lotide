const _ = require("../index");

// test case
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log("findKeyByValue tests:");
_.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
_.assertEqual(
  _.findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
  undefined
);
