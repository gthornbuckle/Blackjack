import React from "react";
import BuildCard from "./card-assets/BuildCard";
import "../style.css";

function Hand(props) {
    let deck = props.dealtDeck;
    let handRot = {};
    let r = 0;
    let handAngle = 60;

    const styleHand = () =>{
        r+=1;
        handRot = handAngle/2 + handAngle/6 * r;
        console.log(handRot);
        return handRot;
    }

    return (
        <div >
            {deck.map(card => <BuildCard suit={card.suit}
            value={card.value}
            id={card.id}
            key={`${card.id}-${card.flipState}`}
            flipped={card.flipState}
            rot={styleHand()}/>)}
        </div>
    );
}

export default Hand;