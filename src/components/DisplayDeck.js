import React, { useState } from "react";
import BuildDeck from "./BuildDeck";
import BuildCard from "./card-assets/BuildCard";
import "../style.css";

function DisplayDeck() {
    let oneSuitTemp = BuildDeck().filter(value => value.suit.includes('clubs'));

    const [deck,setDeck] = useState(oneSuitTemp);

    function clickedCard(cardId){
        const clickedCard = deck.find(card => card.id === cardId);
        console.log(`You clicked The ${clickedCard.value} of ${clickedCard.suit}. Card face up? - ${clickedCard.flipState}`);
        clickedCard.flipCard();

        let newDeck = [];
        for(let i = 0; i<deck.length; i++){
            newDeck.push(deck[i]);
        }
        setDeck(newDeck);
    }

    return (
        <div className="cardStack">
            {deck.map(card => <BuildCard suit={card.suit}
            value={card.value}
            id={card.id}
            key={card.id}
            flipped={card.flipState}
            clickCard={() => {clickedCard(card.id)}}/>)}
        </div>
    );
}


export default DisplayDeck;