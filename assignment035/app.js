// Animals: Think of at least three different animals that have a common characteristic.Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common.You could print a sentence such as Any of these animals would make a great pet!
// Array of animals with a common characteristic
var animals = ["Dog", "Cat", "Rabbit"];
// Loop through the array and print a statement about each animal
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("A ".concat(animal, " would make a great pet."));
}
// Additional sentence about the common characteristic
console.log("Any of these animals would make a great pet!");
