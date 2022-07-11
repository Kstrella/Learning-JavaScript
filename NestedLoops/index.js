// nested loop = a loop inside of another loop

let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of columns');

for(let i = 1; i <= rows; i+=1) //how many times we do the inner loop
{ 
    for(let j = 1; j <= columns; j+=1) // we do this loop and after done it is considerd 1 iteration
    { 
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}