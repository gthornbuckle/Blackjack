import React from "react";
import { motion } from 'framer-motion';
import "../style.css";
import cardBack from "./card-assets/cardback.svg"

function DisplayDeck() {

    const rotRand = () => {
        let rotVal = Math.floor(Math.random() * (5 - 0 + 1) + 0);
        return rotVal;
    }
    

    const deckStyle = {
        hidden: { y: -300 },
        visible: { y: -200,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.15
        }}
    };
      
    const cardStyle = () =>{
        const card = {
        hidden: { y: -600, rotateZ: 0},
        visible: { y: 200, rotateZ: rotRand()}}

        return card;
    };

    return (
        <motion.div
        className="container"
        variants={deckStyle}
        initial="hidden"
        animate="visible"
        > 
        {[...Array(20).keys()].map((index) => (
            <motion.div className="card" key={index} variants={cardStyle()} 
            whileHover={{scale: 1.2, transition: {duration: 0.1, type: "spring"}}}
            >
                <div className="cardFace back" style={{backfaceVisibility: "visible"}}>
                    <img src={cardBack} alt="card-back" draggable="false" />
                </div>
            </motion.div>))}
        </motion.div>
    );
}

export default DisplayDeck;