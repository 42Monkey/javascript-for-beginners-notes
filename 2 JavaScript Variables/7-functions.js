// Functions are essential building blocks in our applications.
// They allow us to group statements together to perform specific tasks or calculate values.

// Function declaration syntax
function sayHi() {
    console.log('Hi!');
}

// We can invoke (call) the function to execute its code.
sayHi();

// We can also define a function with a parameter, which allows us to pass information into it.
function sayHiPartTwo(name) {
    // Then we use string concatenation to use that variable.
    console.log('Hi! ' + name);
}

// To use the sayHiPartTwo function, we can call it and pass a name as an arguments.
// Example: sayHiPartTwo('Alice');    // outputs 'Hi! Alice'
