const assertEqual = require("/home/labber/lighthouse/lotide/assertEqual");

// function can be given an array and an object. It will will count how many 
//times each key from the object appeared in the array and  return an object 
//containing the counts.
const countOnly = function (allItems, itemsToCount) {
  let results = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (!results[item]) {
        results[item] = 0;
      }
      results[item]++;
    }
  }
  return results;
};

module.exports = countOnly;
