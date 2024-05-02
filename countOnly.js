const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
// // my first attempt before reading the whole doc 🙃
// // allItems: an array of strings that we need to look through
// // itemsToCount: an object specifying what to count
// const countOnly = function(allItems, itemsToCount) {
//   let results = {};
//   let tempNum = 0;
//   for (let key in itemsToCount) {
//     tempNum = 0;
//     for (let i = 0; i < allItems.length; i++) {
//       if (key === allItems[i] && itemsToCount[key] === true) {
//         tempNum += 1;
//         results[key] = tempNum;
//       }
//     }
//   }
//   return results;
// };
  

// updated function after reading everything.
const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
    


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

// console.log(countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
//   Agouhanna: false,
// }));

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});
  
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);