// DOM = Document Object Model (API)
// An interface for changing the content of a page (looks like a tree)
//represents HTML file

//uses root,child nodes,parent node
//root <html>

//shows the DOM and whats in it
console.log(document);

//shows properties of DOM
console.dir(document);

//shows title
console.dir(document.title);
//how to change title form JS file
document.title = "Title goes here"

//we can change location too
//document.location = "http://www.google.com"

//shows URL
console.dir(document.URL);


//we also have acess to body element and can change anything
document.body.style.backgroundColor = "skyblue";

//we can change a div tag too
document.getElementById("myDiv").innerHTML = "Hello";

