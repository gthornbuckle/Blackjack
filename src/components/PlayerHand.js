import React from "react";
import BuildCard from "./card-assets/BuildCard";
import "../style.css";

function Hand(props) {
    let deck = props.dealtDeck;
    let xVal = 0;
    let rotVal = 0;

    const xShift = () => {
        xVal+=20;
        return `${xVal}%`;
    }

    const rotShift = () => {
        rotVal+=5;
        return rotVal;
    }

    const dealPlayerAnim = () => {
        return {hidden: { x:"-15vw", y:"-35vh",  rotateY:180, rotateZ:0},
        visible: { x:xShift(), y:"-20%", rotateY:0, rotateZ: rotShift(),
        transition: { delay: 0.1, duration: 0.3 }}};
    }

    return (
        <div>
            {deck.map(card => <BuildCard suit={card.suit}
            value={card.value}
            id={card.id}
            key={`${card.id}-${card.flipState}`}
            flipped={card.flipState}
            handAnim={dealPlayerAnim()}/>)}
        </div>
    );
}

export default Hand;