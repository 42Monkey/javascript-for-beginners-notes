// Objects are a complex data type in JavaScript.
// Think of an object as a collection of related information.
// Objects are often used to represent things (like a person, place or item).
// They can store various values (called properties) and actions (called methods).

// Creating an object using an "object literal" (using curly braces '{}').
// Inside the object, we define properties as key-value pairs.
let course = {
    name: 'JavaScript for Beginners',
    hours: 3,
};

// Accessing a property using dot notation.
console.log(course.name);

// Updating a property's value.
course.name = 'JavaScript Fundamentals';

console.log(course.name);

// Accessing a property using bracket notation.
// Dot notation is preferred, but bracket notation is useful if you
// don't know that exact property name until the code is running.

console.log(course['name']);

// Changing the value of a property with bracket notation.
course['name'] = 'JavaScript 101';

console.log(course.name);

// Example: using bracket notation when the property name is stored in a variable.
let property = 'hours';
console.log(course[property]);

// Objects store information as key-value pairs. Each pair is called a "property" of the object.
let obj = {
    key: 'value' // 'key' is the name of the property, 'value' is the stored data
};
