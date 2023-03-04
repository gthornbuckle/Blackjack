import React from "react";
import BuildCard from "./card-assets/BuildCard";
import "../style.css";

function Hand(props) {
    let deck = props.dealtDeck;

    return (
        <div className="currentHand">
            {deck.map(card => <BuildCard suit={card.suit}
            value={card.value}
            id={card.id}
            key={`${card.id}-${card.flipState}`}
            flipped={card.flipState}/>)}
        </div>
    );
}


export default Hand;