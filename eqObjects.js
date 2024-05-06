const eqArrays = require("/home/labber/lighthouse/lotide/eqArrays"); 
const assertEqual = require("/home/labber/lighthouse/lotide/assertEqual");


// function that compares two objects and returns true if equal or false if not
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



// test case with primatives as values
console.log("eqObjects test: objects with primatives as values");
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
console.log("--------------");
// test case with Arrays
console.log("eqObjects test: objects with Arrays as values");
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
console.log("--------------");

module.exports = eqObjects;
// paste this into file to use this function 
//const eqArrays = require("/home/labber/lighthouse/lotide/eqObjects"); 






// // function that compares two objects changes objects to arrays
// const eqObjects = function(object1, object2) {
//   let object1Arr = Object.keys(object1);
//   let object2Arr = Object.keys(object2);
//   if (object1Arr.length !== object2Arr.length) {
//     return false;
//   }
//   for (let key of object1Arr) {
//   if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//     if (eqArrays(object1[key], object2[key]) !== true) {
//       return false;
//     }
//   } else {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
// }
// return true;
// };
