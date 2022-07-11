// setTimeout() = invokes a function after a number of milliseconds            
// asynchronous function (doesn't pause execution) 

let item = "cryptocurrency";
let price = 42.90;
// setTimeout executes after the milliseconds you put
let timer1 = setTimeout(firstMessage, 3000, item, price); // you can send varibles into a function by adding them after message and time
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
    //alert makes a pop up message
    alert(`Buy this ${item} for $${price}`);
}
function secondMessage(){
    alert(`This is not a scam!`);
}
function thirdMessage(){
    alert(`DO ITT!`);
}
document.getElementById("myButton").onclick = function(){

    //clears timer from setTimeout
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying`);
}