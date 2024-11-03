// Hoisting is a process that moves function declarations to the top
// of their scope, allowing us to call a function before it is defined.

add(2, 2);

function add(num1, num2) {
    return num1 + num2;
}

// Hoisting doesn't apply with function expression syntax,
// so you cannot call/invoke a function before it is defined.

let multiply = function(num1, num2) {
    return num1 * num2;
}

multiply(2, 3);
