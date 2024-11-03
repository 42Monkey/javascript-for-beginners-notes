// Functions are building blocks in our program.
// They allow us to group a set of statements inside curly braces {}.

// We create functions to do one of two things:
// 1. Perform an action.
// 2. Calculate and return a value.

// Not all functions need to use the return keyword.
// If we don't provide a return value, JavaScript will return undefined by default.

function multiply(num1, num2) {
    return num1 * num2;            // returns the product of num1 and num2
}

console.log( multiply(2, 2) );    // outputs 4

// If we don't use the return keyword, the function returns undefined by default.
function add(num1, num2) {
    const sum = num1 + num2;        // calculates the same but doesn't return it.
}

console.log( add(3, 3) );            // outputs undefined
