import React from "react";
import BuildCard from "./card-assets/BuildCard";
import "../style.css";

function DealerHand(props) {
    let deck = props.dealtDeck;
    let xVal = -10;

    const xShift = () => {
        xVal+=10;
        return `${xVal}%`;
    }

    const dealDealerAnim = (i) =>{
        if(i === 0){
            return {hidden: { x:"-65vw", y:"35%", rotateY:180},
            visible: { x:xShift(), y:"35%", rotateY: 180,
            transition: { delay: 0.1, duration: 0.3 }}}
        }else{
            return {hidden: { x:"-65vw", y:"35%", rotateY:180},
            visible: { x:xShift(), y:"35%", rotateY: 0,
            transition: { delay: 0.1, duration: 0.3 }}
        }
    }};

    return (
        <div>
            {deck.map((card, i) => <BuildCard suit={card.suit}
            value={card.value}
            id={card.id}
            key={`${card.id}-${card.flipState}`}
            flipped={card.flipState}
            handAnim={dealDealerAnim(i)}/>)}
        </div>
    );
}

export default DealerHand;