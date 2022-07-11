// anonymous objects = Objects without a name, not directly refernced so we dont have direct access
//have less syntax and dont need unique names

class Card
{
  constructor(value, suit)
  {
      this.value = value;
      this.suit = suit;
  }
}

/*
INSTEAD OF DOING ALL OF THIS
 
           let card1 = new Card("A", "Spades"), 
           let card2 = new Card("A", "Diamonds"), 
           let card3 = new Card("A", "Clubs"), 
           let card4 = new Card("2", "Hearts"), 
           let card5 = new Card("2", "Spades"), 
           let card6 = new Card("2", "Diamonds"), 
           let card7 = new Card("2", "Clubs")

        WE DO WHAT WE HAVE BELOW
*/

//these are the anon objects in an array
let cards = [
           new Card("A", "Hearts"), 
           new Card("A", "Spades"), 
           new Card("A", "Diamonds"), 
           new Card("A", "Clubs"), 
           new Card("2", "Hearts"), 
           new Card("2", "Spades"), 
           new Card("2", "Diamonds"), 
           new Card("2", "Clubs")
          ];

cards.forEach(card => console.log(`${card.value} ${card.suit}`));