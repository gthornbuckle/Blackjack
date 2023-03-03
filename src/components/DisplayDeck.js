import React from "react";
import BuildDeck from "./BuildDeck";
import BuildCard from "./card-assets/BuildCard";
import "../style.css";

function DisplayDeck() {
    const deck = BuildDeck();

    return (
        <div className="cardStack">
            <BuildCard suit={deck[0].suit} value={deck[0].value} />
            <BuildCard suit={deck[1].suit} value={deck[1].value} />
            <BuildCard suit={deck[2].suit} value={deck[2].value} />
            <BuildCard suit={deck[3].suit} value={deck[3].value} />
            {/* <BuildCard suit={deck[4].suit} value={deck[4].value} id={deck[4].id} />
            <BuildCard suit={deck[5].suit} value={deck[5].value} id={deck[5].id} />
            <BuildCard suit={deck[6].suit} value={deck[6].value} id={deck[6].id} />
            <BuildCard suit={deck[7].suit} value={deck[7].value} id={deck[7].id} />
            <BuildCard suit={deck[8].suit} value={deck[8].value} id={deck[8].id} />
            <BuildCard suit={deck[9].suit} value={deck[9].value} id={deck[9].id} />
            <BuildCard suit={deck[10].suit} value={deck[10].value} id={deck[10].id} />
            <BuildCard suit={deck[11].suit} value={deck[11].value} id={deck[11].id} />
            <BuildCard suit={deck[12].suit} value={deck[12].value} id={deck[12].id} /> */}
        </div>
    );
}


export default DisplayDeck;