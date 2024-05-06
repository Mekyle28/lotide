const assertEqual = require("/home/labber/lighthouse/lotide/assertEqual");



// TEST CODE 
console.log("assertEqual test code:");
assertEqual("Lighthouse Labs", "Bootcamp"); //should fail
assertEqual(1, 1); // should pass
assertEqual(1, 10); //should fail
assertEqual(100, 100); // should pass
assertEqual("HI", "HI"); // should pass
assertEqual("HI", "hi"); //should fail
console.log( "---------");


