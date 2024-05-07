const _ = require("../index");

// test case
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
  
  const result1 = _.countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  });
  console.log("countOnly tests:");
  _.assertEqual(result1["Jason"], 1);
  _.assertEqual(result1["Karima"], undefined);
  _.assertEqual(result1["Fang"], 2);
  _.assertEqual(result1["Agouhanna"], undefined);
  