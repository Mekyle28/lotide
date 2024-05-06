const head = require("/home/labber/lighthouse/lotide/head");
const assertEqual = require("/home/labber/lighthouse/lotide/assertEqual");



// test
console.log("head.js tests");
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([10, "hi", "100"]), 10);
assertEqual(head([10]), 10);
assertEqual(head([]),);
console.log("-----------");

