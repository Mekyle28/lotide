// function that takes an object and a value and returns the
// first key that contains the value
const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
