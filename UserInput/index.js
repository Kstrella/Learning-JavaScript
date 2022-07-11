// How to accept user input

// EASY WAY with a window prompt but not too practical

//let username = window.prompt("What's your name?")
//console.log(username);

//you can also use prompt to get user input

// Display the prompt dialog box
//let nme = prompt("What is your name?");

// Output to the console
//console.log("Hello, " + nme + "!");


// DIFFICULT/ more practical way HTML textbox


let username;

document.getElementById("myButton").onclick = function()
{
    //take txt from txt box and put it in username
    username = document.getElementById("myText").value;
    console.log(username);
    
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}
