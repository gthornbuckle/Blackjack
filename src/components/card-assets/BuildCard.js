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

  const displayIcons = value => {

    const generateIconColumn = iconCount =>{
      const suitIcons = [];
      for (let i = 0; i < iconCount; i++){
        let suitIcon = [getSuitIcon(props.suit), props.id];
        suitIcons.push(suitIcon);
      }
      return suitIcons.map(item => <img src={item[0]} alt={item[1]} />);
    }

    let iconLayout ={};

    switch(value){
      case 'A':
        iconLayout = {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'}
        return <div className="iconArea">
          <div style={iconLayout}></div>
          <div style={iconLayout}><img src={getSuitIcon(props.suit)} alt={props.id} /></div>
          <div style={iconLayout}></div>
          </div>;
      case 2:
        iconLayout = {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'}
        return <div className="iconArea">
        <div style={iconLayout}></div>
        <div style={iconLayout}>{generateIconColumn(2)}</div>
        <div style={iconLayout}></div>
        </div>;
      case 3:
        iconLayout = {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'}
        return <div className="iconArea">
        <div style={iconLayout}></div>
        <div style={iconLayout}>{generateIconColumn(3)}</div>
        <div style={iconLayout}></div>
        </div>;
      case 4:
        iconLayout = {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'}
        return <div className="iconArea">
        <div style={iconLayout}>{generateIconColumn(2)}</div>
        <div style={iconLayout}></div>
        <div style={iconLayout}>{generateIconColumn(2)}</div>
        </div>;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 'J':
      case 'Q':
      case 'K':  
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
      <div className="cardBody">{displayIcons(props.value)}</div>
      {/*<div className="cardIcons" style={getIconLayout(props.value)}>
        {getIconCount(props.value)}
        {/* <img src={getSuitIcon(props.suit)} alt={props.id} />
      </div>*/}
      <p className="cardValueBottom" style={getFontColour(props.suit)}>{props.value}</p>
    </div>
  );
}

export default BuildCard;