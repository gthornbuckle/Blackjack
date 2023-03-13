import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DealerHand from "./DealerHand";
import Hand from "./PlayerHand";
import Deal from "./Deal";
import "../style.css";
import BuildDeck from "./BuildDeck";
import  DisplayDeck from "./DisplayDeck";
import EndScreen from "./EndScreen";

const fullDeck = BuildDeck();
let remainingDeck = fullDeck;
let dealerHand = [];
let currentHand = [];
let dealerScore = 0;
let playerScore = 0;
let victory = '';

function Game() {
  const [renderGame, setRender] = useState(false);
  const startGame = React.useCallback(() => setRender(true), []);
  const [endScreen, setEndScreen] = useState(false);
  const displayModal = React.useCallback(() => setEndScreen(true), []);
  const hideModal = React.useCallback(() => setEndScreen(false), []);

  const [dealerHandCount, setDealerhandCount] = useState(0);
  const [playerHandCount, setPlayerHandCount] = useState(0);
  const [playerStanding, setStanding] = useState(false);

  const initialiseGame = () =>{
    startGame();
    setTimeout(() => {updateDealerHand(remainingDeck, true, 'Dealer');}, 3400);
    setTimeout(() => {updatePlayerHand(remainingDeck, true);}, 3800); 
  }

  const releaseGame = (winner) =>{
    victory = winner;
    displayModal();
  }

  const exitGame = () =>{
    hideModal();
  }

  useEffect(() =>{
    console.log(`Dealer has: ${dealerHandCount} card(s).`);
    console.log(`Player has: ${playerHandCount} card(s).`);
  }, [dealerHandCount, playerHandCount]);

  const updateDealerHand = (remainingDeck, initial, handType) => {
    const currentDecks = Deal(remainingDeck, true, initial);
    remainingDeck = currentDecks[0];
    dealerHand = currentDecks[1];

    updateScore(dealerHand, handType);
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
    const aceHandler = hand =>{
      const i = hand.findIndex(card => card.value === 'A');
      let newScore = 0;

        if(i > -1){
          const removeAce = hand.slice();
          removeAce.splice(i, 1);

          const tempScore = removeAce.reduce((acc, card) => {return acc + card.getLetterValue(card.value);}, 0);
          if((tempScore+11) > 21){
            newScore = tempScore+1;
          }else{
            newScore = tempScore+11;
          }
        return newScore;
        }else{
          return hand.reduce((acc, card) => {return acc + card.getLetterValue(card.value);}, 0);
        }    
    }
    
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
        playerScore = aceHandler(hand);
        break;
      case 'PlayerStanding':
        dealerScore = aceHandler(hand); 
        break;
      default: return;
    }
  }

  const standButtonPressed = () =>{
    updateScore(dealerHand, 'PlayerStanding');
    checkWinCondition();
    setStanding(true);
  }

  const checkWinCondition = () =>{
    if(dealerScore > 21){
      console.log("Player Win.");
      releaseGame('Player');
    }else if(playerScore > dealerScore && dealerScore >= 17){
      console.log("Player Win.");
      releaseGame('Player');
    }else if(playerScore < dealerScore && dealerScore >=17){
      console.log("House Win.");
      releaseGame('House');
    }else{
      updateDealerHand(remainingDeck, false, 'PlayerStanding');
      checkWinCondition();
    }
  }

  return (
    <div className="playArea">
      {endScreen && <EndScreen msg={victory} houseTotal={dealerScore} playerTotal={playerScore} btnExit={exitGame}/>}
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
            {renderGame && <DisplayDeck />}
          </div>
        </div>
        <div className="dealerHandZone">
          <p className="tableLabel"></p>
          <div className="dealerHand">
            <DealerHand dealtDeck={dealerHand} playerStanding={playerStanding}/>
          </div>
        </div>
        <div className="playerHandZone">
          <div className="currentHand">
            <Hand dealtDeck={currentHand} />
          </div>
        </div>
        <motion.button className="gameButton hit" 
        onClick={ () => {updatePlayerHand(remainingDeck, false)}}
        whileHover={{scale:1.1}}
        whileTap={{scale: 0.9}}
        transition={{ type: 'spring', stiffness: 500}}
        >Hit</motion.button>
        <motion.button className="gameButton stand" 
        onClick={ () => {standButtonPressed()}}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        transition={{ type: 'spring', stiffness: 500}}
        >Stand</motion.button>
      </div>
      <button onClick={displayModal}>Start</button>
    </div>
  );
}

export default Game;