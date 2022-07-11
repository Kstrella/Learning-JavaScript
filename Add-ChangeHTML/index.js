// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)


//add
//const nameTag = document.createElement("h1");

//change(unsafe)
//nameTag.innerHTML = "Kev";
//document.body.append(nameTag);
/////////////////////////////////////////////////////////////////////////////
//safer text content
//add
//const nameTag = document.createElement("h1");
//change(safer)
//nameTag.textContent = window.prompt("Enter your name");
//document.body.append(nameTag);
/////////////////////////////////////////////////////////////////////////////

//making a list item
const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
myList.append(listItem);
//myList.prepend(listItem); for beginning of list
//to insert in certain spot
//myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);