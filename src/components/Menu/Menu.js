import React, { useState } from "react";
import TicTacToe from "../../App";
import Finish from "../finish/finish";
import './Menu.css';

export default function Menu() {
  // #region States

  const [isVSAI, setAI] = useState(false);
  const [showBoard, setShowBoard] = useState(false);
  const [winner, setWinner] = useState(null);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  // #endregion

  // #region Menu Logic

  function handleButtonClick(AI) {
    setAI(AI);
    if (AI) {
        setShowBoard(true);
    } else {
        setShowBoard(true);
        let p1 = "", p2 = "";
        while (p1 == "") {
            p1 = prompt("Nome do player 1");    
        } 
        while (p2 == "") {
            p2 = prompt("Nome do player 2");
        } 

        if (p1 == null || p2 == null) {
          setShowBoard(false);
          return;
        }

        setPlayer1Name(p1);
        setPlayer2Name(p2);
    }
  }
  
  function handleFinish(winner) {
    setWinner(winner);
    setShowBoard(false);
  }

  function handleRestart() {
    setWinner(null);
    setShowBoard(false);
  }

  // #endregion

  return (
    <div className="menu-container">
      <h1 className="menu-title">Ultimate Tic Tac Toe</h1>

      {!showBoard && !winner && (
        <div className="menu-buttons">
          <button onClick={() => handleButtonClick(false)}>Jogar contra Player</button>
          <button onClick={() => handleButtonClick(true)}>Jogar contra AI</button>
        </div>
      )}

      {showBoard && !winner && (
        <TicTacToe
          isVSAI={isVSAI}
          onFinish={handleFinish}
          player1Name={player1Name}
          player2Name={player2Name}
        />
      )}

      {winner && <Finish winner={winner} onRestart={handleRestart} />}
    </div>
  );
}