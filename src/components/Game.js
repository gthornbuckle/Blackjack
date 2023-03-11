import React, { useState } from "react";
import DealerHand from "./DealerHand";
import Hand from "./Hand";
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

 
  const [deal, setDeal] = useState(0);

  const updateDealerHand = (remainingDeck) => {
    const currentDecks = Deal(remainingDeck, true);
    remainingDeck = currentDecks[0];
    dealerHand = currentDecks[1];

    console.log(currentDecks);
    setDeal(deal+1);
  }

  const [hit, setHit] = useState(0);

  const updatePlayerHand = (remainingDeck,) => {
    const currentDecks = Deal(remainingDeck, false);
    remainingDeck = currentDecks[0];
    currentHand = currentDecks[2];

    console.log(currentDecks);
    setHit(hit+1);
  }

  return (
    <div className="playArea">
      <button onClick={onShow}>Display Deck</button>
      <button onClick={ () => {updatePlayerHand(remainingDeck)}}>Hit me</button>
      <button onClick={ () => {updateDealerHand(remainingDeck)}}>Deal for dealer</button>
      <div className="dealerZone">
        <div className="tableDeck">
          {hasRender && <DisplayDeck />}
        </div>
        <div className="dealerHand">
          <DealerHand dealtDeck={dealerHand} />
        </div>
      </div>
      <div className="currentHand">
        <Hand dealtDeck={currentHand} />
      </div>
    </div>
  );
}

export default Game;