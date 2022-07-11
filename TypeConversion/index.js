// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)
/*
let age = window.prompt("How old are you?");
//when reading user input it reads nubers as strings so we need to convert to a number

//shows us the type of age
console.log(typeof age);

//using Number it grabs the numbers in string and makes them into numbers
age = Number(age);

//shows us the type of age
console.log(typeof age);

age += 1;

console.log("Happy Birthday! You are", age, "years old");

*/



let x;
let y;
let z;

//x = Number("pizza"); not a number so returns NaN
x = Number("123");
y = String(3.14);
//empty string is false, and anything in string makes it true
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
