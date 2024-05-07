# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @mekyle28/lotide`

**Require it:**

`const _ = require('@mekyle/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `_.assertArraysEqual(actualArray, expectedArray)`: Checks if two arrays are equal and logs the results. 
- `_.assertEqual(actualValue, expectedValue)`: Checks if two primitives are equal and logs the results
- `_.assertObjectsEqual(actualObject, expectedObject)`: Checks if two ojects are equal and logs the results.
- `_.eqArrays(array1, array2)`: Compares two Arrays and returns true if equal or false if not
- `_.aeqObjects(array1, array2)`: Compares two objects and returns true if equal or false if not
- `_.head(actualObject, expectedObject)`: takes an array and returns the first value.
- `_.tail(array)`: Removes the first element of an array and returns a new array of remaining values. 
- `_.middle(array)`: Takes an array and returns an array of the middle-most element(s).
- `_.countLetters("string")`: Counts how many times a letter shows up in a string and returns an object 
- `_.countOnly(array,object)`: Given an array and an object. It will will count how many times each key from the object appeared in the array and  return an object containing the counts.
- `_.LetterPositions("string")`: Takes a string and returns an object with the index value for each letter in the string.
- `_findKey(Object, callback)`: Takes an object and a callback and returns the first key for which the callback returns a truthy value.
- `_.findKeyByValue(object, value)`: Takes an object and a value and returns the first key that contains the value
- `_.map(array, callback)`: Takes in an array and a function then returns a new altered array based on the changes performed by the function   
- `_.tackUntil(array, callback)`: takes an array and callback returns a slice of the array, with elements taken from the beginning and will keep going until the callback returns a truthy value   
- `_.without(arraySource, arrayToRemove)`: Take two arrays, returns an array that is a copy of the first array with any element in the second array removed.    
  
