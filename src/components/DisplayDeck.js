import React from "react";
import BuildDeck from "./BuildDeck";
import BuildCard from "./card-assets/BuildCard";
import "../style.css";

function DisplayDeck() {
    const deck = BuildDeck();
    let hearts = deck.filter(value => value.suit.includes('clubs'));

    function clickedCard(cardId){
        const clickedCard = hearts.find(card => card.id === cardId);
        console.log(`You clicked The ${clickedCard.value} of ${clickedCard.suit}`)
    }

    return (
        <div className="cardStack">
            {hearts.map(card => <BuildCard suit={card.suit}
            value={card.value}
            id={card.id}
            key={card.id}
            clickCard={() => {clickedCard(card.id)}}/>)}
        </div>
    );
}


export default DisplayDeck;