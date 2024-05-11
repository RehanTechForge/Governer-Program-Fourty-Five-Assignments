// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.The text of each message should be the same, but each message should be personalized with the person’s name.

// Define an array of names
let names: string[] = ["Asghar", "Atta", "Bilal", "Ahmed"];

// Iterate through each name in the array
for (let i = 0; i < names.length; i++) {
    // Print a greeting message for each person
    console.log("Hello " + names[i] + "!");
}