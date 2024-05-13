// Cars: Write a function that stores information about a car in a Object.The function should always receive a manufacturer and a model name.It should then accept an arbitrary number of keyword arguments.Call the function with the required information and two other name - value pairs, such as a color or an optional feature.Print the Object that’s returned to make sure all the information was stored correctly.
// Define the car_info function
function car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Assign additional key-value pairs to the car object
    extras.forEach(function (extra) {
        var key = Object.keys(extra)[0];
        car[key] = extra[key];
    });
    return car;
}
// Call the function with required information and additional name-value pairs
var car1 = car_info("Toyota", "Camry", { color: "red" }, { year: 2023 });
var car2 = car_info("Tesla", "Model S", { color: "black" }, { autopilot: true });
// Print the objects returned to verify the stored information
console.log(car1);
console.log(car2);
