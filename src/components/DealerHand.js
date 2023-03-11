import React from "react";
import BuildCard from "./card-assets/BuildCard";
import "../style.css";

function DealerHand(props) {
    let deck = props.dealtDeck;

    const dealDealerAnim = { 
        hidden: { x:"-65vw", y:"35%", rotateY:180},
        visible: { x:"5%", y:"35%", rotateY:0,
        transition: { delay: 0.1, duration: 0.3 }}
    }

    return (
        <div>
            {deck.map(card => <BuildCard suit={card.suit}
            value={card.value}
            id={card.id}
            key={`${card.id}-${card.flipState}`}
            flipped={card.flipState}
            handAnim={dealDealerAnim}/>)}
        </div>
    );
}

export default DealerHand;