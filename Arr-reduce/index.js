//array.reduce() = reduces an array to a single value            

//great for summing up an array of value into a single number
let prices = [5, 10, 15, 20, 25, 30];

let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`);

function checkOut(total, element){
    return total + element;
}