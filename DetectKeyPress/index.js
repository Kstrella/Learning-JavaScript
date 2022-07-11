//detecting key presses
//window.addEventListener("keydown", event => console.log(event.key));
const myDiv = document.getElementById("myDiv");
//move is a function we will make
//key up is to move after we let go of key
window.addEventListener("keydown", move); 

let x = 0;
let y = 0;

//this is to move a box based on what arrow we press down
function move(event){
    
    switch(event.key){
        case "ArrowDown":
            y+=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x+=5;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x-=5;
            myDiv.style.left = x + "px";
            break;
        default:
            break;
    }
}