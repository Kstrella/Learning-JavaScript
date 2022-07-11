//array.forEach() = executes a provided callback function once for each array element

let students = ["spongebob", "patrick", "squidward"];

//////////////////////////////////
//for each
students.forEach(capitalize);
students.forEach(print);
//////////////////////////////////
//capitalizes first letter of each name
function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}