//Event = action user or browser does

//const element = document.getElementById("myButton");

//const element = document.body;

//const element = document.getElementById("myText");



const element = document.getElementById("myDiv");

//element.onclick = doSomething;
//element.onload = doSomething;
//element.onchange = doSomething;
//element.onmouseover = doSomething;
//element.onmouseout = doSomethingElse;
element.onmousedown = doSomething; //similar to on click
element.onmouseup = doSomethingElse; //similar to on click

function doSomething(){
    //alert("You did something!");
    element.style.backgroundColor = "red";
}
function doSomethingElse(){
    //alert("You did something!");
    element.style.backgroundColor = "lightgreen";
}