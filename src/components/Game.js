import React from "react";
import DisplayDeck from "./DisplayDeck";
import "../style.css";

function Game() {

  return (
    <div>
      <header className="header">
        <h1>Blackjack</h1>
      </header>
      <DisplayDeck />
    </div>
  );
}

export default Game;