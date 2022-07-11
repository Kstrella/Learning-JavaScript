/* 
   arithmetic expression is a combination of operands (values, variables, etc.)
   operators (+ ,-, * ,/, %)
   that can be evaluated to a value
   ex. y = x + 5;
*/

let students = 20;

//students = students + 1; 21
//students = students - 1; 19
//students = students * 2; 40
//students = students / 2; 10
//let extraStudents = students % 2; 0
//students = students ** 2; ** to raise to the power (ex. using 2)

console.log(students);

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let result = (1 + 2) * (3 + 4);

console.log(result);