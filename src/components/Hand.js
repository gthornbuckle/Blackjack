import React, { useState } from "react";
import BuildCard from "./card-assets/BuildCard";
import "../style.css";

function Hand(props) {
    let dealtDeck = props.currentHand;

    return (
        <div className="currentHand">
            {dealtDeck.map(card => <BuildCard suit={card.suit}
            value={card.value}
            id={card.id}
            key={`${card.id}-${card.flipState}`}
            flipped={card.flipState}/>)}
        </div>
    );
}


export default Hand;