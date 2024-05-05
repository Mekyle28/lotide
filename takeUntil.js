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
  
  
// will return a "slice of the array with elements taken from the 
// beginning and will keep going until the callback returns a truthy value
const takeUntil = ((array, callback) => {
    let results = [];
    for (let element of array) {
       if (!callback(element)){
        results.push(element);
       } else {
        return results;
       }
    }
    return results;
});


// test case
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);

console.log('---');

assertArraysEqual(takeUntil([], x => x < 0), []);

