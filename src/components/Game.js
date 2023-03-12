import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DealerHand from "./DealerHand";
import Hand from "./PlayerHand";
import Deal from "./Deal";
import "../style.css";
import BuildDeck from "./BuildDeck";
import  DisplayDeck from "./DisplayDeck";

const fullDeck = BuildDeck();
let remainingDeck = fullDeck;
let dealerHand = [];
let currentHand = [];

function Game() {
  const [hasRender, setRender] = useState(false);
  const onShow = React.useCallback(() => setRender(true), []);
  const [dealerHandCount, setDealerhandCount] = useState(0);
  const [playerHandCount, setPlayerHandCount] = useState(0);

  const initialiseGame = () =>{
    onShow();
    setTimeout(() => {updateDealerHand(remainingDeck, true);}, 3400);
    setTimeout(() => {updatePlayerHand(remainingDeck, true);}, 3800); 
  }

  useEffect(() =>{
    console.log(`Dealer has: ${dealerHandCount} card(s).`);
    console.log(`Player has: ${playerHandCount} card(s).`);
  }, [dealerHandCount, playerHandCount]);

  const updateDealerHand = (remainingDeck, initial) => {
    const currentDecks = Deal(remainingDeck, true, initial);
    remainingDeck = currentDecks[0];
    dealerHand = currentDecks[1];

    setDealerhandCount(dealerHandCount+1);
  }

  const updatePlayerHand = (remainingDeck, initial) => {
    const currentDecks = Deal(remainingDeck, false, initial);
    remainingDeck = currentDecks[0];
    currentHand = currentDecks[2];

    setPlayerHandCount(playerHandCount+1);
  }

  return (
    <div className="playArea">
      <button onClick={initialiseGame}>Start</button>
      <button onClick={ () => {updatePlayerHand(remainingDeck, false)}}>Hit me</button>
      <button onClick={ () => {updateDealerHand(remainingDeck, false)}}>Deal for dealer</button>
      <div className="table">
        <div className="scoreCounter">
          <div className="scoreInfo">
            <h2>Dealer</h2>
            <p className="currentScore">21</p>
            <svg height="80" width="80" viewBox="0 0 20 20">
              <circle r="10" cx="10" cy="10" fill="rgba(0, 0, 0, 0.3)" />
              <circle r="5" cx="10" cy="10" fill="transparent"
                      stroke="tomato"
                      stroke-width="10"
                      stroke-dasharray="calc(25 * 31.4 / 100) 31.4"
                      transform="rotate(-90) translate(-20)" />
            </svg>
          </div>
          <div className="scoreInfo">
            <h2>Player</h2>
            <p className="currentScore">21</p>
            <svg height="80" width="80" viewBox="0 0 20 20">
              <circle r="10" cx="10" cy="10" fill="rgba(0, 0, 0, 0.3)" />
              <circle r="5" cx="10" cy="10" fill="transparent"
                      stroke="tomato"
                      stroke-width="10"
                      stroke-dasharray="calc(25 * 31.4 / 100) 31.4"
                      transform="rotate(-90) translate(-20)" />
            </svg>
          </div>
        </div>
        <div className="deckZone">
          <p className="tableLabel"></p>
          <div className="tableDeck">
            {hasRender && <DisplayDeck />}
          </div>
        </div>
        <div className="dealerHandZone">
          <p className="tableLabel"></p>
          <div className="dealerHand">
            <DealerHand dealtDeck={dealerHand}/>
          </div>
        </div>
        <div className="playerHandZone">
          <div className="currentHand">
            <Hand dealtDeck={currentHand} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;