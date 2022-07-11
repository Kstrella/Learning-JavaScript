// window = interface used to talk to the web browser
// the DOM is a property of the window



//console.dir(window);
//console.log(window.innerWidth); //gets height
//console.log(window.innerHeight);//gets width
//console.log(window.scrollX); //how many px we scrolled
//console.log(window.scrollY);

//console.log(window.location.href); //shows the current adress
//window.location.href = "https://google.com"; //redirtects us to google
//console.log(window.location.hostname); //gives local IP
//console.log(window.location.pathname); //gives path name so index.html

const myButton = document.querySelector("#myButton");
//myButton.addEventListener("click", () => window.open("https://google.com"));
//myButton.addEventListener("click", () => window.close()); //closes the window
//myButton.addEventListener("click", () => window.print()); //prints current page

//window.alert("Hello!");
//window.confirm("Press OK to coninue!");
/*
let age = window.prompt("Enter your age");
if(age < 18){
    window.alert("You must be 18+ to visit this site");
    window.close();
}
*/
