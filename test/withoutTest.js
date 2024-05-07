const _ = require("../index");

// test case
_.assertArraysEqual(_.without([1, 2, 3], [1]), [2, 3]); // should pass
_.assertArraysEqual(_.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // should pass
_.assertArraysEqual(_.without(["1", "2", "3"], []), ["1", "2", "3"]); // should pass
_.assertArraysEqual(_.without([], [1, 2, "3"]), []); // should pass
_.assertArraysEqual(_.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2", "3"]); // should fail



//Write a test case to make sure that the original array is not modified.
const words = ["hello", "world", "lighthouse"];
_.without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
_.assertArraysEqual(words, ["hello", "world", "lighthouse"]);

