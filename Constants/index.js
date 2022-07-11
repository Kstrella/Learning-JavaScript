//we use constants for values we dont want to be changed 
// const = a variable that can't be changed
//good practice to make contant variables in all UPPER CASE
// circumference of a circle


const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);