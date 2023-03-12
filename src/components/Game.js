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
let dealerScore = 0;
let playerScore = 0;

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

    updateScore(dealerHand, 'Dealer');
    setDealerhandCount(dealerHandCount+1);
  }

  const updatePlayerHand = (remainingDeck, initial) => {
    const currentDecks = Deal(remainingDeck, false, initial);
    remainingDeck = currentDecks[0];
    currentHand = currentDecks[2];

    updateScore(currentHand, 'Player');
    setPlayerHandCount(playerHandCount+1);
  }

  const updateScore = (hand, handType) =>{
    switch(handType){
      case 'Dealer':
        dealerScore = hand.reduce((acc, card, i) => {
          if (i >= 1){
            return acc + card.getLetterValue(card.value);
          }
          else{
            return 0;
          }
        }, 0);
        break;
      case 'Player':
        playerScore = hand.reduce((acc, card) => {return acc + card.getLetterValue(card.value);}, 0);
        break;
      default: return;
    }
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
            <motion.svg width="100" height="100" viewBox="0 0 20 20" initial="hidden" animate="visible">
              <motion.circle
                cx="10"
                cy="10"
                r="9"
                stroke="rgb(22, 165, 165)"
                initial={{opacity: 0, pathLength: 0}}
                animate={{opacity: Math.round(dealerScore), pathLength: Math.round((dealerScore/21)*100)/100}}
                transition={{ type: 'spring', bounce: 0.5}}
              />
              <text className="currentScore" x="50%" y="55%" fill="white" dominantBaseline="middle" textAnchor="middle">{dealerScore}</text> 
            </motion.svg>
          </div>
          <div className="scoreInfo">
            <h2>Player</h2>
            <motion.svg width="100" height="100" viewBox="0 0 20 20" initial="hidden" animate="visible">
              <motion.circle
                cx="10"
                cy="10"
                r="9"
                stroke="rgb(22, 165, 165)"
                initial={{opacity: 0, pathLength: 0}}
                animate={{opacity: Math.round(playerScore), pathLength: Math.round((playerScore/21)*100)/100}}
                transition={{ type: 'spring', bounce: 0.5}}
              />
              <text className="currentScore" x="50%" y="55%" fill="white" dominantBaseline="middle" textAnchor="middle">{playerScore}</text> 
            </motion.svg>

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