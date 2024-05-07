const _ = require("../index");

// test case with primatives as values
console.log("eqObjects test: objects with primatives as values");
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
_.assertEqual(_.eqObjects(shirtObject, anotherShirtObject), true);


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
_.assertEqual(_.eqObjects(shirtObject, longSleeveShirtObject), false);
console.log("--------------");
// test case with Arrays
console.log("eqObjects test: objects with Arrays as values");
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
_.assertEqual(_.eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
_.assertEqual(_.eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
console.log("--------------");
