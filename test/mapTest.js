const _ = require("../index");

// test case 
const words = ["ground", "control", "to", "major", "tom"];
const results1 = _.map(words, (word) => word[0]);
console.log(results1);

const results2 = _.map(words, (word) => word.length);
console.log(results2);

const results3 = _.map(words, (word) => "🎶" + word);
console.log(results3);


_.assertArraysEqual(_.map(words, (word) => word[0]), ["g", "c", "t", "m", "t"]);

_.assertArraysEqual(_.map(words, (word) => word.length), [ 6, 7, 2, 5, 3 ]);

_.assertArraysEqual(_.map(words, (word) => "🎶" + word), [ '🎶ground', '🎶control', '🎶to', '🎶major', '🎶tom' ])
