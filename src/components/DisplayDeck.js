import React from "react";
import BuildDeck from "./BuildDeck";
import BuildCard from "./card-assets/BuildCard";
import "../style.css";

function DisplayDeck() {
    const deck = BuildDeck();

    return (
        <div className="cardStack">
            <BuildCard suit={deck[0].suit} value={deck[0].value} />
            <BuildCard suit={deck[27].suit} value={deck[27].value} />
            <BuildCard suit={deck[15].suit} value={deck[15].value} />
            <BuildCard suit={deck[42].suit} value={deck[42].value} />
            <BuildCard suit={deck[4].suit} value={deck[4].value} />
            <BuildCard suit={deck[31].suit} value={deck[31].value} />
            <BuildCard suit={deck[19].suit} value={deck[19].value} />
            <BuildCard suit={deck[46].suit} value={deck[46].value} />
            <BuildCard suit={deck[8].suit} value={deck[8].value} />
            <BuildCard suit={deck[35].suit} value={deck[35].value} />
            <BuildCard suit={deck[23].suit} value={deck[23].value} />
            <BuildCard suit={deck[50].suit} value={deck[50].value} />
            <BuildCard suit={deck[12].suit} value={deck[12].value} />
        </div>
    );
}


export default DisplayDeck;