// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const) let better for variable scope
// 2. Assignment ( = assignment operator)

let firstName = "kev"; //strings
let age = 24; //number
let student = true; //booleans

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);


//these lines lets us edit the text in our html file
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;