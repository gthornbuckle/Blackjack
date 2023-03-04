import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../style.css";
import hearts from "./hearts.svg"
import diamonds from "./diamonds.svg"
import spades from "./spades.svg"
import clubs from "./clubs.svg"
import cardBack from "./cardback.svg"


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
      return suitIcons.map((item, i) => <img key={item+i} src={item[0]} alt={item[1]} draggable="false" />);
    }

    let iconLayout = {};
    let iconLayoutOffset = {};

    switch(value){
      case 'A':
        iconLayout = {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'}
        return <div className="iconArea">
          <div style={iconLayout}></div>
          <div style={iconLayout}><img src={getSuitIcon(props.suit)} alt={props.id} draggable="false" /></div>
          <div style={iconLayout}></div>
          </div>;
      case 2:
        iconLayout = {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
          alignItems: 'center',
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
          alignItems: 'center',
          justifyContent: 'space-between'}
        return <div className="iconArea">
        <div style={iconLayout}>{generateIconColumn(2)}</div>
        <div style={iconLayout}></div>
        <div style={iconLayout}>{generateIconColumn(2)}</div>
        </div>;
      case 5:
        iconLayout = {
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'}
        iconLayoutOffset = {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          postion: 'absolute'}
        return <div className="iconArea">
        <div style={iconLayout}>{generateIconColumn(2)}</div>
        <div style={iconLayoutOffset}>{generateIconColumn(1)}</div>
        <div style={iconLayout}>{generateIconColumn(2)}</div>
        </div>;
      case 6:
        iconLayout = {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'}
        return <div className="iconArea">
        <div style={iconLayout}>{generateIconColumn(3)}</div>
        <div style={iconLayout}></div>
        <div style={iconLayout}>{generateIconColumn(3)}</div>
        </div>
      case 7:
        iconLayout = {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'}
          iconLayoutOffset = {
            width: '100%',
            height: 140,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            postion: 'absolute'}
        return <div className="iconArea">
        <div style={iconLayout}>{generateIconColumn(3)}</div>
        <div style={iconLayoutOffset}>{generateIconColumn(1)}</div>
        <div style={iconLayout}>{generateIconColumn(3)}</div>
        </div>
      case 8:
        iconLayout = {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'}
          iconLayoutOffset = {
            width: '100%',
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            justifyContent: 'space-around',
            alignItems: 'center',
            postion: 'absolute'}
        return <div className="iconArea">
        <div style={iconLayout}>{generateIconColumn(3)}</div>
        <div style={iconLayoutOffset}>{generateIconColumn(2)}</div>
        <div style={iconLayout}>{generateIconColumn(3)}</div>
        </div>
      case 9:
        iconLayout = {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'}
          iconLayoutOffset = {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            postion: 'absolute'}
        return <div className="iconArea">
        <div style={iconLayout}>{generateIconColumn(4)}</div>
        <div style={iconLayoutOffset}>{generateIconColumn(1)}</div>
        <div style={iconLayout}>{generateIconColumn(4)}</div>
        </div>
      case 10:
        iconLayout = {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'}
          iconLayoutOffset = {
            width: '100%',
            height: 270,
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            justifyContent: 'space-around',
            alignItems: 'center',
            postion: 'absolute'}
        return <div className="iconArea">
        <div style={iconLayout}>{generateIconColumn(4)}</div>
        <div style={iconLayoutOffset}>{generateIconColumn(2)}</div>
        <div style={iconLayout}>{generateIconColumn(4)}</div>
        </div>
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

  const [rotation, setRotation] = useState(0);

  return (
    <motion.div className="card" animate={{ rotateX: rotation }} transition={{ duration: 0.1}} onClick={ () => setRotation(rotation + 180) }>
      <div className="cardFace front">
        <div className="cardInfoTop">
          <p className="cardValueTop" style={getFontColour(props.suit)}>{props.value}</p>
          <img className="cardIconTop" src={getSuitIcon(props.suit)} alt={props.id} draggable="false" />
        </div>
        <div className="cardBody">{displayIcons(props.value)}</div>
        <div className="cardInfoBottom">
          <p className="cardValueBottom" style={getFontColour(props.suit)}>{props.value}</p>
          <img className="cardIconBottom" src={getSuitIcon(props.suit)} alt={props.id} draggable="false" />
        </div>
      </div>
      <div className="cardFace back">
          <img src={cardBack} alt="card-back" draggable="false" />
      </div>
    </motion.div>
  );
}

export default BuildCard;