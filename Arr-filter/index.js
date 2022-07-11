//array.filter() = creates a new array with all elements that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 90];

let adults = ages.filter(checkAge);

adults.forEach(print);

//if passes the condition it adds the value ro a new array (adults)
function checkAge(element){
    return element >= 18;
}
function print(element){
    console.log(element);
}