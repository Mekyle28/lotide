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

  // function will take in an array and return the middle-most element(s) of the given array
const middle = function(array) {
  let middleArr = [];
  let num = 0;
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      num = Math.floor(array.length / 2);
      middleArr.push(array[num]);
    } else {
      num = (array.length / 2);
      middleArr.push(array[num - 1]);
      middleArr.push(array[num]);
    }
  }
  return middleArr;
};
  

// test code

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

assertArraysEqual(middle([1, 2]), []);