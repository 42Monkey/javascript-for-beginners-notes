// Logical operators are used to make decisions based on multiple conditions.
// There are four main logical operators:
// 1. || (or operator)
// 2. && (and operator)
// 3. !  (not operator)
// 4. ?? (nullish coalescing operator)

// These operators can be applied to values of any type, not just boolean values.
// Expressions are evaluated from left to right.

// The || operator (or operator)
// Returns true if at least one of the operands is true.
console.log(true || true);							// true
console.log(true || false);							// true
console.log(false || true);							// true
console.log(false || false);						// false

// Example using the || operator
let hasReservation = true;
let acceptingWalkIns = false;
const hasAccessToTable = hasReservation || acceptingWalkIns;
console.log('hasAccessToTable', hasAccessToTable);	// outputs: hasAccessToTable true

// The && operator (and operator)
// Returns true only if all operands are truthy.
console.log(true && true);							// true
console.log(true && false);							// false
console.log(false && true);							// false
console.log(false && false);						// false

// Example using the && operator
let age = 16;
let hasCar = true;
const canDrive = age >= 16 && hasCar;
console.log('canDrive', canDrive); 					// outputs: canDrive true

// Another example combining && and || operators
let a = true, b = true, c = true, d = true;
console.log(a && b || c && d);						// evaluates to true

// This is equivalent to:
console.log((a && b) || (c && d));					// evaluates to true

// The ! operator (not operator)
// Returns the inverse of the operand.
console.log(!true);									// false

// Example using the ! operator
let isClosedOnSunday = true;
const isRestaurantOpen = !isClosedOnSunday;			// false
console.log('isRestaurantOpen', isRestaurantOpen);	// outputs: isRestaurantOpen false


// The ?? operator (nullish coalescing operator)
// Returns the right-hand side value when the left-hand side value is null or undefined
let doesValueExist = null;
const result = doesValueExist ?? false;				// false
console.log('result', result);						// outputs: result false

// So the ?? operator is syntactic sugar for...
const resultOfExpression = (doesValueExist !== null && doesValueExist !== undefined) ? doesValueExist : false;
