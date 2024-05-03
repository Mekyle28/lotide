// this function checks if two arrays are equal
const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++)
      if (arr1[i] !== arr2[i]) {
        return false;
      }
        
    return true;
  };
  
  // this function checks if two arrays are equal and logs the result.
  const assertArraysEqual = function(arrActual, arrExpected) {
    if (eqArrays(arrActual, arrExpected) === true) {
      console.log(`✅The arrays [${arrActual}] and [${arrExpected}] are equal`);
    } else {
      console.log(`🔴The arrays [${arrActual}] and [${arrExpected}] are not equal`);
    }
  };

// map function that takes in an array and a function then returns a new
// altered array based on the changes performed by the function
const map = function(array, callback) {
    const results = [];
    for (const element of array){
        results.push(callback(element));
    }
  return results;
};

// test case 
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);

const results2 = map(words, (word) => word.length);
console.log(results2);

const results3 = map(words, (word) => "🎶" + word);
console.log(results3);


assertArraysEqual(map(words, (word) => word[0]), ["g", "c", "t", "m", "t"]);

assertArraysEqual(map(words, (word) => word.length), [ 6, 7, 2, 5, 3 ]);

assertArraysEqual(map(words, (word) => "🎶" + word), [ '🎶ground', '🎶control', '🎶to', '🎶major', '🎶tom' ])

