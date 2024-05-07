
// map function that takes in an array and a function then returns a new
// altered array based on the changes performed by the function
const map = function(array, callback) {
    const results = [];
    for (const element of array){
        results.push(callback(element));
    }
  return results;
};

module.exports= map;