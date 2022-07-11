// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)

let temp = 15;
let sunny = false;
//if(temp > 60 || temp < 85 && sunny){
if(temp > 60 && temp < 85 && sunny){
    console.log('The weather is good!');
}
else{
    console.log('The weather is bad!');
}