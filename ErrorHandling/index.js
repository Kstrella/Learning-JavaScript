// error = object with a description of something that went wrong
//ex. cant open file, loose connection, incorrect user input, TypeError(miss typing)
// throw = executes a user-defined error


//code that could cause an error should be put in a try block 
//followed by a catch block
try //anything wrong in here wont stop the program 
{
  let x = window.prompt("Enter a #");
  x = Number(x);

  //if its not a number throw a custom error
  if(isNaN(x)) throw "That wasn't a number!";
  if(x == "") throw "That was empty!";

  console.log(`${x} is a number`);
}

catch(error) //catches the throw 
{
  console.log(error);
}


finally // good for clean up, always executed
{
  console.log("This always executes");
}