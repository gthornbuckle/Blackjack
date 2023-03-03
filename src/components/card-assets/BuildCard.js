import React from "react";
import "../../style.css";
import hearts from "./hearts.svg"
import diamonds from "./diamonds.svg"
import spades from "./spades.svg"
import clubs from "./clubs.svg"

function BuildCard(props) {
  const getSuitIcon = suit => {
    switch (suit) {
      case 'hearts': return hearts;
      case 'diamonds': return diamonds;
      case 'spades': return spades;
      case 'clubs': return clubs;
    }
  }

  const getIconCount = value => {
    const suitIcons = [];

     if (value >= 2 && value <= 10){
      for (let i = 0; i < value; i++){
        let suitIcon = [getSuitIcon(props.suit), props.id];
        suitIcons.push(suitIcon);
      }

      return suitIcons.map(item => <img src={item[0]} alt={item[1]}/>);
     }
     else{
      switch(value){
        case 'A': return <img src={getSuitIcon(props.suit)} alt={props.id} />
      }
     }
  }

  const getIconLayout = value => {
    let iconLayout = {};

    switch(value){
      case 'A': iconLayout = {
        width: '50%',
        display: 'flex',
        alignSelf: 'center'
      }
      return iconLayout;
      case 2:
      case 3: iconLayout = {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'center'
      }
      return iconLayout;
      case 4: iconLayout = {
        width: '70%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2)',
        gap: 30,
        gridAutoFlow: 'row',
        gridAutoRows: '200px 50px',
        alignSelf: 'center'
      }
      return iconLayout;
    }
  }

  const getFontColour = suit => {

    if(suit === 'hearts' || suit === 'diamonds'){
      let fontColour = { color: "#C44117"}
      return fontColour;
    }else{
      let fontColour = { color: "#120F25"}
      return fontColour;
    }
  }

  return (
    <div className="card">
      <p className="cardValueTop" style={getFontColour(props.suit)}>{props.value}</p>
      <div clasName="cardIcons" style={getIconLayout(props.value)}>
        {getIconCount(props.value)}
        {/* <img src={getSuitIcon(props.suit)} alt={props.id} /> */}
      </div>
      <p className="cardValueBottom" style={getFontColour(props.suit)}>{props.value}</p>
    </div>
  );
}

export default BuildCard;