//let element = document.body;
//let element = document.querySelector("#fruit");
/*

let element = document.querySelector("#vegetables");
let child = element.firstElementChild;
child.style.backgroundColor = "lightgreen";
*/

//let element = document.querySelector("#vegetables");
//makes all green because parent is html
//let parent = element.parentElement; 
//parent.style.backgroundColor = "lightgreen";

/*
//shows iceream list
let sibling = element.nextElementSibling; 
sibling.style.backgroundColor = "lightgreen";
*/

/*
//shows fruits
let sibling = element.previousElementSibling; 
sibling.style.backgroundColor = "lightgreen";
*/

//makes all children green using for each
let element = document.querySelector("#vegetables");
let children = Array.from(element.children);
children.forEach(child => child.style.backgroundColor = "lightgreen")
// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)