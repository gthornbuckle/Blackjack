import React from "react";
import './style.css';
import Game from "./components/Game";
// import { motion } from "framer-motion";

function App() {
  return  (
  <div>
    <header className="header">
      <h1>Blackjack</h1>
    </header>
    <Game />
  </div>
  );
}

export default App;
