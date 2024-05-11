// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Array of usernames
var usernames = ["admin", "Eric", "John", "Alice", "Bob"];
// Check if the list of users is not empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print greetings
    for (var i = 0; i < usernames.length; i++) {
        if (usernames[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello " + usernames[i] + ", thank you for logging in again.");
        }
    }
}
// Remove all usernames
usernames = [];
// Check if the list of users is empty after removal
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
