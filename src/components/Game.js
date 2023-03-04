import React, { useState } from "react";
import Hand from "./Hand";
import Deal from "./Deal";
import "../style.css";
import BuildDeck from "./BuildDeck";

const fullDeck = BuildDeck();
let remainingDeck = fullDeck;
let currentHand = [];

function Game() {

  const [hit, setHit] = useState(0);

  const updateHand = remainingDeck => {
    const currentDecks = Deal(remainingDeck);
    remainingDeck = currentDecks[1];
    currentHand = currentDecks[0];

    console.log(currentDecks);
    setHit(hit+1);
  }

  return (
    <div className="playArea">
      <button onClick={ () => {updateHand(remainingDeck)}}>Hit me</button>
      <div className="dealerHand">
      </div>
      <div className="currentHand">
        <Hand dealtDeck={currentHand} />
      </div>
    </div>
  );
}

export default Game;