const eqArrays = require("/home/labber/lighthouse/lotide/eqArrays"); 



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



module.exports = eqObjects;







