// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Define an array of guest names
var guestList = ["Asghar", "Anas", "Bilal", "Ali"];
// Iterate through each guest in the array and print an invitation message
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi " + guestList[i] + ", I would like to invite you to dinner.");
}
// Print the name of the guest who can't make it
console.log("Unfortunately, " + guestList[2] + " can't make it to dinner.");
// Modify the guest list by replacing the guest who can't make it
guestList[2] = "Ahmed"; // Assuming Ahmed is the new person invited
// Print a second set of invitation messages with the updated guest list
console.log("\nAfter changes:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi " + guestList[i] + ", I would like to invite you to dinner.");
}
