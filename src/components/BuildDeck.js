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

    getLetterValue(value){
      if (isNaN(value)){
        switch(value){
          case 'A':
            return 1;
          case 'J':
            return 10;
          case 'Q':
            return 10;
          case 'K':
            return 10;
          default: return;
        }
      }else{
        return value;
      }
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