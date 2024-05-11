// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.Make sure you use each character combination, "\t" and "\n", at least once.Print the name once, so the whitespace around the name is displayed.Then print the name after striping the white spaces.
// Person's name with whitespace characters
var nameWithWhitespace = "\t   John Doe\n";
// Print the name with whitespace
console.log("Name with whitespace:", nameWithWhitespace);
// Strip whitespace characters from the name
var strippedName = nameWithWhitespace.trim();
// Print the stripped name
console.log("Stripped name:", strippedName);
