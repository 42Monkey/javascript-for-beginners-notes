// In JavaScript, the ternary operator is a conditional operator that allows us to write more concise code.
// It can be used to evaluate a condition and assign values based on that condition.

// Example usage:
// Instead of using a simple comparison, you can use the ternary operator to store the result directly.
// Note: The following line is a simpler alternative:
// const canDrive = age >= 16;
// This example demonstrates the syntax of the ternary operator.

let age = 16;
const canDrive = age >= 16 ? true : false;				// evaluates if age is 16 or older
console.log('canDrive', canDrive);						// outputs: canDrive true

let points = 110;
const customerType = points > 100 ? 'gold' : 'silver';	// assigns 'gold' if points exceed 100; else 'silver
console.log('customerType', customerType);				// outputs: customerType gold
