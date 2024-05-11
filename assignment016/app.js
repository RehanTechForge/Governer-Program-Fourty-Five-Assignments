// More Guests: You just found a bigger dinner table, so now more space is available.Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Define an array of guest names
var guestList = ["Asghar", "Anas", "Bilal", "Ali"];
// Iterate through each guest in the array and print an invitation message
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi " + guestList[i] + ", I would like to invite you to dinner.");
}
// Print a statement informing about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
guestList.unshift("Ahmed");
// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Aisha");
// Use push() to add one new guest to the end of the list
guestList.push("Amir");
// Print a new set of invitation messages with the updated guest list
console.log("\nAfter inviting more guests:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi " + guestList[i] + ", I would like to invite you to dinner.");
}
