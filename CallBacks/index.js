// callback = a function passed as an argument to another function.
 // makes sure a function doesnt run before a task is completed


//    Helps us develop asynchronous code.
//    (When one function has to wait for another function)
//    that helps us avoid errors and potential problems
//    Ex. Wait for a file to load

//sum(2, 3, displayConsole); //passing is displayConsole as argumnet means it does sum then sends it to displayConsole
sum(2, 3, displayDOM);
function sum(x, y, callBack) //callBack is the displayConsole funct
{
  let result = x + y;
  callBack(result);
}





//displays to console
function displayConsole(output)
{
  console.log(output);
}

//displays to DOM(the actual page)
function displayDOM(output)
{
  document.getElementById("myLabel").innerHTML = output;
}
