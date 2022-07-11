// 2D array = An array of arrays

let fruits =     ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =      ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats]; //the 2d array where we put the arrays in this other array

//row,col
groceryList[0][0] = "mangos"; //replaces apples with mangos
groceryList[2][2] = "steak"; //replaces fish with steak

for(let list of groceryList)
{ //manages each list
    console.log(list);
    for(let food of list) // lists all elements of the arrays
    {
        console.log(food);
    }
}