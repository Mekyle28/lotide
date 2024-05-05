


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


// input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


const results3 = takeUntil([], x => x === ',');
console.log(results3);
// //ecpected output
// [1, 2, 5, 7, 2]
// --
//     ['I\'ve', 'been', 'to', 'Hollywood']