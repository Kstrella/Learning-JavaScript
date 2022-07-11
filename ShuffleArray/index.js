//good for card games!

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

console.log(cards);
//console.log(cards[0]);
//cards.forEach(card => console.log(card)); //deals cards in the deck

function shuffle(array){
  let currentIndex = array.length;

  while(currentIndex != 0){
    //begin at end and swap with random until we hit index 0
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex-=1;

    //just a swap 
    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  
  return array;
}