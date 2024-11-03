// An expression in JavaScript is any code that produces a value.
// Expressions typically appear on the right side of a variable assignment.

// JavaScript has different arithmetic operators for performing calculations:
// -, +, *, / and % 

// The % operator is called the modulo operator. It returns the remainder of a division.

console.log(2 + 2); // outputs 4 (addition)

console.log(4 - 2); // outputs 2 (subtraction)

console.log(2 * 2); // outputs 4 (multiplication)

console.log(9 / 3); // outputs 3 (division)

console.log(10 % 2); // outputs 0 (the remainder of 10 divided by 2)

console.log(3 ** 2); // outputs 9 (3 raised to the power of 2)

// We also have shorthand operators for incrementing or decrementing values:
let a = 10;

// Incrementing a value:
a = a + 1;				// increases a by 1

a += 1;					// increases a by 1 (shorthand for a = a + 1)

// Post-increment: increases a by 1, then returns the original value of a before the increment.
a++; 

// Pre-increment: increases a by 1, then returns the new value of a after the increment.
++a;

// Decrementing a value:
a -= 1;					// decreases a by 1

// Post-decrement: decreases a by 1, then returns the original value of a before the decrement.
a--;

// Pre-increment: decreases a by 1, then returns the new value of a after the decrement.
--a;
