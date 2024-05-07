const tail = require("../tail");
const assert = require('chai').assert;

const testArray = ["Yo Yo", "Lighthouse", "Labs"]

describe("#tail", () => {

  
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo, 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(testArray), ['Lighthouse', 'Labs']);
  });

  it("check and make sure tail() didn't alter the original Array returns ['Yo Yo', 'Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(testArray, [ 'Yo Yo', 'Lighthouse', 'Labs' ]); 
  });

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['hi', 100] for ['10', 'hi', '100']", () => {
    assert.deepEqual(tail([10, "hi", 100]), ["hi", 100]); 
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]),[]); 
  });
});
