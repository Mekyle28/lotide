const _ = require("../index");

//test code
console.log("letterPositions test:");
console.log(_.letterPositions(""));

let object = _.letterPositions("hello");

_.assertArraysEqual(object["h"], [0]);
_.assertArraysEqual(object["e"], [1]);
_.assertArraysEqual(object["l"], [2, 3]);
_.assertArraysEqual(object["o"], [4]);
