import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../style.css";

function EndScreen(props) {

    return (
        <AnimatePresence>
            <motion.div className="endMessageContainer" key='exit-modal'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ type: 'spring', bounce: 0.5, duration: 1}}>
                <div className="endMessageContent">
                    <h1>{`${props.msg} Wins!`}</h1>
                    <div className="modalButtons">
                        <motion.button onClick={props.btnReplay}
                        className="gameButton"
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
        </AnimatePresence>
    );
}

export default EndScreen;