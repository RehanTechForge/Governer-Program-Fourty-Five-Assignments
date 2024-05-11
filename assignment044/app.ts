// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.Call the function three times, using a different number of arguments each time.

// Define the make_sandwich function
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different number of arguments
make_sandwich("Ham", "Cheese", "Lettuce", "Tomato");
make_sandwich("Turkey", "Swiss", "Avocado");
make_sandwich("Peanut Butter", "Jelly");
