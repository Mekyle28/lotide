  
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

module.exports = takeUntil;