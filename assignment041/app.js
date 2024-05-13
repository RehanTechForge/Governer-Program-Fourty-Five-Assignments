// Magicians: Make a array of magician’s names.Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Define the show_magicians function
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Array of magician's names
var magicians = ["Merlin", "David Copperfield", "Harry Houdini"];
// Call the show_magicians function
show_magicians(magicians);
