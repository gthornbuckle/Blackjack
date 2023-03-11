let dealerDeck =[];
let playerDeck =[];

function Deal(deck, dealer){
    const randi = Math.floor(Math.random()*deck.length);
    const dealtCard = deck.splice(randi, 1)[0];

    switch(dealer){
        case true:
            dealerDeck.push(dealtCard);
            console.log(`Dealer dealt: ${dealtCard}`);
            break;
        case false:
            playerDeck.push(dealtCard);
            console.log(`Player dealt: ${dealtCard}`);
            break;
        default:
            return;
    }

    const currentDecks =[];
    currentDecks.push(deck, dealerDeck, playerDeck);
    return currentDecks;
}

export default Deal;