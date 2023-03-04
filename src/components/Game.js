import React, { useState} from "react";
import Hand from "./Hand";
import Deal from "./Deal";
import "../style.css";
import BuildDeck from "./BuildDeck";

function Game() {
  const fullDeck = BuildDeck();
  let remainingDeck = fullDeck;
  let currentHand = [];

  const [hand, setHand] = useState(currentHand);

  const updateHand = remainingDeck => {
    const currentDecks = Deal(remainingDeck);
    remainingDeck = currentDecks[1];
    let dealtHand = currentDecks[0];

    setHand(dealtHand);
  }

  return (
    <div>
      <header className="header">
        <h1>Blackjack</h1>
      </header>
      <button onClick={ () => {updateHand(remainingDeck)}}>Hit me</button>
      <Hand currentHand={hand}/>
    </div>
  );
}

export default Game;