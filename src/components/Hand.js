import React, { useRef, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import BuildCard from "./card-assets/BuildCard";
import "../style.css";

function Hand(props) {
    let deck = props.dealtDeck;
    let handRot = {};
    let r = 0;
    let handAngle = 60;

    const styleHand = () =>{
        r+=1;
        handRot = {transform: `rotate(${handAngle/2 + handAngle/6 * r}deg)`};
        return handRot;
    }

    return (
        <div>
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