// arrow function expression = compact alternative to a traditional function expression
//  =>



//------------------------------------ex.1----------------------------------
// regular way

/*
const greeting = function(userName)
{
    console.log(`hello ${userName}`);
}
*/
 
/*
.//arraw way 
.//2 or more arguments need parethesis, one argument doesnt
const greeting = (userName) => console.log(`hello ${userName}`);
*/


//------------------------------------ex.2----------------------------------
// regular way

/*
const percent = function(x,y)
{
    return x / y * 100;
}
console.log(percent});
*/

//arraw way 

/*
const percent = (x,y) => x / y * 100;
}
console.log(percent});
*/




//--------------------------------------ex3----------------------------------

//normal
/*
let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x, y){
    return y - x;
}

function print(element){
    console.log(element);
}
*/

//arrow way!
const grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));