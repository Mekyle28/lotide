const _ = require("../index");

// tests 
console.log("assertobjectsEqual tests:");
  _.assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }); // should pass
  _.assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 6, b: 2, c: 3 }); // should fail 
  _.assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 6, b: 2, c: 3 }); // should fail 
  _.assertObjectsEqual({}, {}); // should pass
  console.log("-----------");

  