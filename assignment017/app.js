// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.Print your list to make sure you actually have an empty list at the end of your program.
// Define an array of guest names
var guestList = ["Asghar", "Anas", "Bilal", "Ali", "Ahmed", "Aisha", "Amir"];
// Iterate through each guest in the array and print an invitation message
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi " + guestList[i] + ", I would like to invite you to dinner.");
}
// Print a message saying only two people can be invited
console.log("\nUnfortunately, we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    // Remove the last guest from the list
    var removedGuest = guestList.pop();
    // Print a message to the removed guest
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}
// Print invitation messages to the two people still on the list
console.log("\nYou're still invited to dinner:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi " + guestList[i] + ", I would like to invite you to dinner.");
}
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the empty list to confirm it's empty
console.log("\nEmpty guest list:", guestList);
