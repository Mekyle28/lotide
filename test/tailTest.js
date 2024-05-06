const assertEqual = require("../assertEqual");
const tail = require("../tail");



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsCopy = words;
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words, wordsCopy);
// //test case 1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); //ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure the first element is "Lighthouse"
assertEqual(result[1], "Labs"); //ensure second element is "Labs"
