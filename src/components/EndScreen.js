import React from "react";
import { motion, } from "framer-motion";
import "../style.css";

function EndScreen(props) {

    return (
        <motion.div className="endMessageContainer"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ type: 'spring', bounce: 0.5}}>
            <div className="endMessageContent">
                <h1>{`${props.msg} Wins!`}</h1>
                <div className="modalButtons">
                    <motion.button className="gameButton"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{ type: 'spring', stiffness: 500}}>
                        Replay
                    </motion.button>
                    <motion.button onClick={props.btnExit}
                    className="gameButton"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{ type: 'spring', stiffness: 500}}>
                        Exit
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}

export default EndScreen;