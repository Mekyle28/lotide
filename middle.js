// function will take in an array and return the middle-most element(s) of the given array
const middle = function (array) {
  let middleArr = [];
  let middleIndex = Math.floor(array.length / 2);

  if (array.length > 2) {
    // we can return the middle for an array of 1 || 2
    if (array.length % 2 !== 0) {
      middleArr.push(array[middleIndex]);
    } 
    if (array.length % 2 === 0) {
      middleArr.push(array[middleIndex - 1]);
      middleArr.push(array[middleIndex]);
    }
  }
  return middleArr;
};

module.exports = middle;
