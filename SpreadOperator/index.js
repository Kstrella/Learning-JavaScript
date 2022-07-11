

// spread operator = allows an iterable such as an array or string to be expanded in places where zero or more 
// arguments are expected (unpacks the elements)
// spread operator is "...""
//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(numbers); //shows details of array object
//console.log(...numbers); //numbers with spaces

//let Uname = kevvvv;
//console.log(...Uname); //string into individual chars

//let maximum = Math.max(numbers); retuerns NaN
//let maximum = Math.max(...numbers); //thius is great whaen you have to pass a full array into a function easily
//console.log(maximum);

//we need to merge these 2 classes 
let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
//class1.push(class2); this would just push the whole array as a single spot 3 students and an array
class1.push(...class2); //shows all 6 students
console.log(...class1);
