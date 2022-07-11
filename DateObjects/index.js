// The Date object is used to work with dates & times

let date = new Date(); //no arguments = curr date and time 

//let date = new Date(0); //0 is refernce 
// (year,month,day,hour,min,sec,miliseconds)
//let date = new Date(2023, 0, 1, 2, 3, 4, 5);
//can be passed as string too instead
//let date = new Date("January 1, 2023 00:00:00");

/*
let year = date.getFullYear(); //gets us year
let dayOfMonth = date.getDate(); //gets us month
let dayOfWeek = date.getDay(); //gets us day
let month = date.getMonth();
let hour = date.getHours(); //gets us hour in military time
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
*/


/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/

//makes date more readable
//date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = date;


//this function formats date
function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`
}

//this function formats time
function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    //converting military time to regular
    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}

1