const _ = require("../index");


// test case
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
_.assertArraysEqual(_.takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
_.assertArraysEqual(_.takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);

console.log('---');

_.assertArraysEqual(_.takeUntil([], x => x < 0), []);