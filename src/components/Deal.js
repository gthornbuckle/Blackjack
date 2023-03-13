let dealerDeck = [];
let playerDeck = [];

function Deal(deck, dealer, initial){

    if(initial === true){
        dealerDeck =[];
        playerDeck =[];
        const dealtCard = deck.sort(() => 0.5 - Math.random()).splice(0, 2);
    
        switch(dealer){
            case true:
                dealerDeck.push(dealtCard[0], dealtCard[1]);
                break;
            case false:
                playerDeck.push(dealtCard[0], dealtCard[1]);
                break;
            default:
                return;
        }

    }else{
        const randi = Math.floor(Math.random()*deck.length);
        const dealtCard = deck.splice(randi, 1)[0];
    
        switch(dealer){
            case true:
                dealerDeck.push(dealtCard);
                break;
            case false:
                playerDeck.push(dealtCard);
                break;
            default:
                return;
        }
    }

    const currentDecks =[];
    currentDecks.push(deck, dealerDeck, playerDeck);
    return currentDecks;
}

export default Deal;