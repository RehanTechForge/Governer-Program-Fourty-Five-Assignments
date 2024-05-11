// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users.Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used.If it has, print a message that the person will need to enter a new username.If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive.If 'John' has been used, 'JOHN' should not be accepted.

// List of current users
let current_users = ["john", "alice", "bob", "mary", "jane"];

// List of new users
let new_users = ["jane", "eric", "MARY", "sam", "susan"];

// Convert current_users to lowercase for case-insensitive comparison
let current_users_lower = current_users.map(user => user.toLowerCase());

// Loop through new_users list
for (let i = 0; i < new_users.length; i++) {
    // Convert the new username to lowercase for case-insensitive comparison
    let new_username_lower = new_users[i].toLowerCase();

    // Flag to track if the username is already taken
    let isTaken = false;

    // Loop through current_users_lower to check if the new username is taken
    for (let j = 0; j < current_users_lower.length; j++) {
        if (current_users_lower[j] === new_username_lower) {
            isTaken = true;
            break;
        }
    }

    // Print appropriate message based on whether the username is taken or not
    if (isTaken) {
        console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please enter a new username.");
    } else {
        console.log("Congratulations! The username '" + new_users[i] + "' is available.");
    }
}
