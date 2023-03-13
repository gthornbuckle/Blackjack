import React from "react";
import "../style.css";

function EndScreen(props) {



    return (
        <div className="endMessageContainer">
            <div className="endMessageContent">
                <h1>{`${props.msg} Wins!`}</h1>
            </div>
        </div>
    );
}

export default EndScreen;