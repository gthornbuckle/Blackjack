let dealtDeck =[];

function Deal(deck){
    const randi = Math.floor(Math.random()*deck.length);
    const dealtCard = deck.splice(randi, 1)[0];
    dealtDeck.push(dealtCard);

    const currentDecks =[];
    currentDecks.push(dealtDeck, deck);
    console.log(currentDecks);
    return currentDecks;
}

export default Deal;