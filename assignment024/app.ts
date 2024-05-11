// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


//! • Tests for equality and inequality with strings
let name1 = "John";
let name2 = "john";

// Test for equality (case-sensitive)
console.log("Are name1 and name2 equal? I predict False.");
console.log(name1 === name2);

// Test for inequality (case-sensitive)
console.log("Are name1 and name2 not equal? I predict True.");
console.log(name1 !== name2);


//! • Tests using the lower case function
let str = "Hello World";

// Test if the string is all lowercase
console.log("Is the string all lowercase? I predict False.");
console.log(str.toLowerCase() === str);

// Test if the string is all uppercase
console.log("Is the string all uppercase? I predict False.");
console.log(str.toUpperCase() === str);


//! • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 10;

// Numerical tests involving equality and inequality
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2);
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 !== num2);

// Greater than and less than
console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2);
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);

// Greater than or equal to and less than or equal to
console.log("Is num1 greater than or equal to num2? I predict False.");
console.log(num1 >= num2);
console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2);


//! • Tests using "and" and "or" operators
let age = 25;
let isStudent = true;

// Test using "and" operator
console.log("Is the person both a student and over 18 years old? I predict True.");
console.log(isStudent && age > 18);

// Test using "or" operator
console.log("Is the person either a student or over 30 years old? I predict True.");
console.log(isStudent || age > 30);


//! • Test whether an item is in a array
let fruits = ['apple', 'banana', 'orange'];

// Test whether 'apple' is in the array
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.indexOf('apple') !== -1);

// Test whether 'grape' is in the array
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.indexOf('grape') !== -1);


//! • Test whether an item is not in a array
// Test whether 'apple' is not in the array
console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(fruits.indexOf('apple') === -1);

// Test whether 'grape' is not in the array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(fruits.indexOf('grape') === -1);

