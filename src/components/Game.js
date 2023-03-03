import React from "react";
import DisplayDeck from "./DisplayDeck";
import "../style.css";

function Game() {

  return (
    <div>
      <header className="header">
        <h1>Blackjack</h1>
      </header>
      {/* <button onClick={DisplayDeck}>Start</button> */}
      <DisplayDeck />
    </div>
  );
}

export default Game;