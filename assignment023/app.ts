// Conditional Tests: Write a series of conditional tests.Print a statement describing each test and your prediction for the results of each test.Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests.Have at least 5 tests evaluate to Tr  ue and another 5 tests evaluate to False.

// Define variables for testing
let x = 5;
let y = 10;
let UserName = "John";
let isAdmin = true;
let fruits: string[] = ['apple', 'banana', 'orange'];

// Test 1: Is x equal to 5?
console.log("Is x equal to 5? I predict True.");
console.log(x == 5);

// Test 2: Is y greater than 10?
console.log("Is y greater than 10? I predict False.");
console.log(y > 10);

// Test 3: Is UserName equal to "John"?
console.log("Is UserName equal to 'John'? I predict True.");
console.log(UserName == 'John');

// Test 4: Is isAdmin true?
console.log("Is isAdmin true? I predict True.");
console.log(isAdmin);

// Test 5: Is 'apple' in the fruits array?
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.indexOf('apple') !== -1);

// Test 6: Is x less than or equal to 5?
console.log("Is x less than or equal to 5? I predict True.");
console.log(x <= 5);

// Test 7: Is y not equal to 10?
console.log("Is y not equal to 10? I predict False.");
console.log(y != 10);

// Test 8: Is UserName not equal to "Mary"?
console.log("Is UserName not equal to 'Mary'? I predict True.");
console.log(UserName != 'Mary');

// Test 9: Is x equal to 10?
console.log("Is x not equal to 10? I predict False.");
console.log(x === 10);

// Test 10: Is 'grape' in the fruits array?
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.indexOf('grape') !== -1);

