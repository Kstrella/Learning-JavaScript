//frame
let canvas = document.getElementById("myCanvas");
//painting
let context = canvas.getContext("2d");

//DRAW LINES
/*
context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);//starting pos of our canvas top left corner
context.lineTo(250, 250);//ending pos bottom right corner
context.lineTo(250, 500);//takes to bottom on canvas
context.moveTo(500, 0);//top right 
context.lineTo(250, 250);//to middle
context.stroke();//makes the line
*/

//DRAW TRIANGLE
/*
context.strokeStyle = "grey";
context.fillStyle = "yellow";
context.lineWidth = 10;
context.beginPath();//start
context.moveTo(250, 0);//top middle
context.lineTo(0, 250);//draws line from middle to left corner
context.lineTo(500, 250);//draws to right side
context.lineTo(250, 0);//draws to top middle middle
context.stroke();
context.fill();
*/


//DRAW RECTANGLE
/*
context.fillStyle = "black";
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "blue";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 0, 250, 250);
*/

//DRAW CIRCLE
/*
//(x, y, r, sAngle, eAngle, counterclockwise)
context.fillStyle = "lightblue";
context.strokeStyle = "darkblue";
context.lineWidth = 10;

context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();
*/

//DRAW TEXT

context.font = "50px MV Boli";
context.fillStyle = "lightgreen";
context.textAlign = "center";
//to center text
context.fillText("Ayeeee", canvas.width / 2, canvas.height / 2);
