
//ES6 (module) is a file of reusable code
// imports section of prewritten code when we want
// makes code more readable and reusable 

//think its likje seperate chapters of a book
//in HTML file use  <script type="module" src="index.js"></script>


//this imports the functions we want from the file
//import {PI, getCircumference, getArea} from "./math_util.js";

//or you can import like this so that you can just import everyting usinf (*)
//naming it mathUtil means we use it as its name like math.pi
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);