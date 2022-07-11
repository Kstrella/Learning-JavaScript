// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

//global variable = declared outside any function
//if global,var will change browsers window properties

//USE LET OVER VAR

for(let i = 1; i <= 3; i+=1){
    //console.log(i);
}
for(var i = 1; i <= 3; i+=1){
    //console.log(i);
}

console.log(i);