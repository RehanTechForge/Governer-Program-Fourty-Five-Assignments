// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Define an array of transportation modes
let transportation: string[] = ['motorcycle', 'car', 'bicycle', 'boat', 'airplane'];

// Iterate through each transportation mode in the array
for (let i = 0; i < transportation.length; i++) {
    // Print a statement expressing a desire to own each mode of transportation
    console.log(`I would like to own a ${transportation[i]}.`);
}
