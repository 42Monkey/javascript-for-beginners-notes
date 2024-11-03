// In JavaScript, we can check for equality using two methods:
// 1. Loose equality, which uses the == operator.
// 2. Strict equality, which uses the === operator.

let a = 2;    // number

let b = '2';  // string

// Loose equality checks if values are equal, but it does not consider their data types.
// JavaScript performs type coercion to convert the values to the same type before comparing.

console.log(a == b); // true

// Strict equality checks if both the value and data type are the same.
// If they are not the same type, it returns false.

console.log(a === b); // false (number 2 is not the same type as string '2')

// Example of loose equality with a boolean and a string:
console.log(true == '1'); // true (true is coerced to 1)

// It is recommended to always use strict equality (===) for comparisons to avoid unexpected results.
