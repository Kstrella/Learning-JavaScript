// slice() extracts a section of a string and returns it as a new string, without modifying the original string

let fullName = "Cap Capperson";
let firstName;
let lastName;

//not realistic to do 
//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);

//slice (starting index/char, where to end)
firstName = fullName.slice(0, fullName.indexOf(" "));

//+1 so it goes to the end of string
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
