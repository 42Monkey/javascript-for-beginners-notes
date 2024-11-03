// Expressions are evaluated from left to right in JavaScript.
// When using logical operators with non-boolean values,
// they return the value of the operand instead of just true or false.

// For the || (or) operator
console.log(false || 'Steven');									// returns 'Steven'

// Since 'Steven' is truthy, it is the value returned.
// The OR operator returns the first truthy value it encounters.

// Falsy values in JavaScript are:
// - undefined
// - null
// - 0
// - false
// - ''
// - NaN
// Any value not in this list is considered truthy.

// Example of short-circuit evaluation:
console.log(false || 1 || 2); 									// returns 1
// The OR operator stops evaluating once it finds a truthy value.

// Another practical example:
let usersChosenColor = 'blue';									// a truthy value
let defaultColor = 'green';	
const currentWebsiteColor = usersChosenColor || defaultColor;	// returns 'blue'

console.log('Current website color:', currentWebsiteColor);		// outputs: Current website color: blue
