// JavaScript has two types of data:
// 1. Primitive (simple) types, which hold a single value directly.
// 2. Reference (complex) types, like objects, which store collections of values.

// Basic primitive data types:
// 1. String - for text values
let favoriteFruit = 'strawberries';   // use single quotes
let favoriteIceCream = "chocolate";   // or double quotes
let favoriteProgrammingLanguage = `JavaScript`; // or backticks for special text

// 2. Number - for all numbers (integers and decimals)
let numberOfDonuts = 12;             // whole numbers
let pi = 3.14;                       // decimal numbers

// 3. BigInt - for very large numbers
let veryLargeNumber = 54389759347634976346n; // add 'n' at the end

// 4. Boolean - for true/false values
let lovesCoding = true;             // can only be true or false

// 5. Undefined - for variable declaration but not assigned a value
let favoriteColor;
console.log(favoriteColor);         // undefined

// 6. Null - a value that represents "no value" or "empty"
favoriteFruit = null;

// 7. Symbol - for unique identifiers, often used in objects
let id = Symbol('id');             // each Symbol is unique
let id2 = Symbol('id');            // even with the same description
console.log(id === id2);           // shows 'false'

// Reference types (complex):
// 8. Object - stores multiple related values as key-value pairs
let course = {
    name: 'JavaScript for Beginners',
    hours: 3
};

// Check data types using typeof
console.log(typeof 3);               // shows 'number'
console.log(typeof favoriteFruit);   // shows 'object' (null)
console.log(typeof veryLargeNumber); // shows 'bigint'
console.log(typeof 'taco');          // shows 'string'
console.log(typeof null);            // shows 'object'
console.log(typeof id);              // shows 'symbol'

// Note: typeof null returns 'object' due to JavaScript's design history.
// Null is actually a primitive type, but typeof incorrectly returns 'object'.
