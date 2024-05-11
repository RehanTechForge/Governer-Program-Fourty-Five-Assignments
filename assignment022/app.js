// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.Change an index in one of your programs to produce an index error.Make sure you correct the error before closing the program.
// Define an array of transportation modes
var transportation = ['motorcycle', 'car', 'bicycle', 'boat', 'airplane'];
// Intentionally access an invalid index to produce an index error
var validIndexOrNot = transportation[10] === undefined ? "you must specify a valid index" : transportation[10];
// Print the result of index access
console.log(validIndexOrNot); // Accessing index 10 which doesn't exist
// Print each transportation mode
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a ".concat(transportation[i], "."));
}
