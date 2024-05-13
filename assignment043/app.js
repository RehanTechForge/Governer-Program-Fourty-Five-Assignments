// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.Because the original array will be unchanged, return the new array and store it in a separate array.Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the show_magicians function
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Define the make_great function
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great " + magician; });
}
// Array of magician's names
var magicians = ["Merlin", "David Copperfield", "Harry Houdini"];
// Create a copy of the magicians array
var original_magicians = __spreadArray([], magicians, true);
// Call the make_great function with a copy of the magicians array
var great_magicians = make_great(__spreadArray([], magicians, true));
// Call the show_magicians function with each array to display the original and modified names
console.log("Original Magicians:");
show_magicians(original_magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
