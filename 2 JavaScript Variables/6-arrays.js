// Arrays are used to store lists of data.
// You can think of an array as a container that holds multiple values.
// To create an array, we use square brackets [] to define an "array literal".
let productColors = ['blue', 'green'];

console.log(productColors);          // shows entire array in the console

// You can access items in an array using their position, called an index.
// The first item is at index 0.
console.log(productColors[0]);        // outputs 'blue'

// Arrays can hold different types of values, such as strings or numbers.
// It's common to keep all items in an array the same type for simplicity.

// Arrays are a special kind of object in JavaScript.
// Objects are collections of key-value pairs, and arrays use numbers as their keys.

console.log(typeof productColors);    // shows 'object'

// A helpful property of arrays is 'length', which tells you how many items are in the array.
console.log(productColors.length);
