// function that takes an object and a callback and returns the
// first key for which the callback returns a truthy value.
const findKey = function (object, callback) {
  for (let key in object) {
    if (callback(object[key])) return key;
  }
};

module.exports = findKey;
