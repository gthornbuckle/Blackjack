function BuildDeck() {
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  class Card {
    constructor(id, suit, value, flipState) {
      this.id = id;
      this.suit = suit;
      this.value = value;
      this.flipState = flipState;
    }
    
    flipCard(){
      if(this.flipState === true){
        this.flipState = false;
      }else{ this.flipState = true}
    }
  }

  const deck = [];
  for (let i = 0; i < suits.length; i++){
    for (let j = 0; j < values.length; j++){
      let card = new Card(`${values[j]}-${suits[i]}`, suits[i], values[j], true);
      deck.push(card);
    }
  }

  return deck;
}

export default BuildDeck;