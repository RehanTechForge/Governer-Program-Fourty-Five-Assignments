// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Define an array of guest names
let guestList: string[] = ["Asghar", "Anas", "Bilal", "Ali"];

// Print the number of people being invited to dinner
console.log("Number of people being invited to dinner:", guestList.length);

// Iterate through each guest in the array and print an invitation message
for (let i: number = 0; i < guestList.length; i++) {
    console.log("Hi " + guestList[i] + ", I would like to invite you to dinner.");
}
