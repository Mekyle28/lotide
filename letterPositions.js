// function takes a string and returns an object with the
// index value for each letter in the string
const letterPositions = (string) => {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if (!results[string[i]]) {
        results[string[i]] = [];
      }
      results[string[i]].push(i);
    }
  }
  return results;
};
module.exports = letterPositions;
