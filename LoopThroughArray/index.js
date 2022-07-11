//looping through array

let prices = [5, 10, 15, 20, 25];
 
/*
normal way

for(let i = 0; i < prices.length; i+=1){
for(let i = prices.length -1; i>=0; i-=1) this is how to iterate backwards
    console.log(prices[i]);
}
*/

//more simple way for JS 
for(let price of prices){
    console.log(price);
}