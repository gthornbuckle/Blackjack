import React from "react";
import { motion } from 'framer-motion';
import "../style.css";
import cardBack from "./card-assets/cardback.svg"

function DisplayDeck() {
    
    const deck = {
        hidden: { y: 0 },
        visible: { y: -100,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1
        }}
    };
      
    const card = {
        hidden: { y: 0 },
        visible: { y: -300 }
    };

    return (
        <motion.div
        className="container"
        variants={deck}
        initial="hidden"
        animate="visible"
        > 
        {[...Array(20).keys()].map((index) => (
            <motion.div className="card" key={index} variants={card}>
                <div className="cardFace back" style={{backfaceVisibility: "visible"}}>
                    <img src={cardBack} alt="card-back" draggable="false" />
                </div>
            </motion.div>))}
        </motion.div>
    );
}

export default DisplayDeck;