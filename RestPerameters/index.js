// rest parameters = represents an indefinite number of parameters (packs arguments into an array)
// ... for rest perameter
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));
//this function can accept an indefinite num of arguments
function sum(...numbers) //...numbers puts everything we passed in a array and does the math
{
    let total = 0;

    for(let number of numbers)
    {
        total += number //adds each number to it 
    }
    return total
}