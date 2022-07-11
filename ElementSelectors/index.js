

//document.getElementById
/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";
*/


//document.getElementsByName
/*
//makes node list like an arr
let fruits = document.getElementsByName("fruits");
//console.log(fruits)
fruits.forEach(fruit => 
{
  if(fruit.checked){
    console.log(fruit.value);
  }
})
*/

//document.getElementsByTagName
/*
let veg = document.getElementsByTagName("li");
veg[0].style.backgroundColor = "lightgreen";
*/


// document.getElementsByClassName
/*
let des = document.getElementsByClassName("desserts");
des[0].style.backgroundColor = "lightgreen";
*/


//document.querySelector
//when using
// id = # before the name
// class = . before the name
// tag name = just tag name "li"
//attribute (first element with for) = [for]
/*
let element = document.querySelector("#myTitle")
element.style.backgroundColor = "lightgreen";
*/

//for all elements we use document.querySelectorAll
//id,class,and tag work the same
let element = document.querySelectorAll("li");
element.forEach(element =>{
  element.style.backgroundColor = "lightgreen";
});

