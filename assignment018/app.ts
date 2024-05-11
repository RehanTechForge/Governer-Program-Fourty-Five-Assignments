// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array.Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list.Print the array to show that its order has changed.

// • Reverse the order of your list again.Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order.Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order.Print the list to show that its order has changed.

// Think of at least five places in the world you’d like to visit
let placesToVisit: string[] = ["Tokyo", "Paris", "Bora Bora", "Machu Picchu", "Santorini"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order by printing it
console.log("Original order (unchanged):", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order by printing it again
console.log("Original order (unchanged):", placesToVisit);

// Reverse the order of the list and print the array to show its order has changed
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again and print the array to show it’s back to its original order
placesToVisit.reverse();
console.log("Original order:", placesToVisit);

// Sort the array so it’s stored in alphabetical order and print the array to show its order has been changed
placesToVisit.sort();
console.log("Alphabetical order:", placesToVisit);

// Sort to change the array so it’s stored in reverse alphabetical order and print the list to show its order has changed
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", placesToVisit);

