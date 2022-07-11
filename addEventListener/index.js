// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

//innerDiv.addEventListener("mouseover", changeRed);
//innerDiv.addEventListener("mouseout", changeGreen);
/*
function changeRed(){
    innerDiv.style.backgroundColor = "red";
}

function changeGreen(){
  innerDiv.style.backgroundColor = "lightgreen";
}
*/


//for element in element(div in div/  outer div)
innerDiv.addEventListener("click", changeBlue);
//pasing in true handles outer before inner because they ar ein the same space
outerDiv.addEventListener("click", changeBlue, true);


function changeBlue(){
  alert(`You selected ${this.id}`);
  this.style.backgroundColor = "lightblue"
}

