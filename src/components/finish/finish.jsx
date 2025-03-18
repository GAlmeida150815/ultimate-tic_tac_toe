import React from "react";
import './finish.css';

export default function Finish({ winner, onRestart }) {
  const message = winner == "empate" ? "Empate!" : `${winner} venceu`;

  return (
    <div className="finish-container">
      <h2 className={`finish-message`}>{message}</h2>
      <button className="finish-restart" onClick={onRestart}>
        Voltar ao Menu
      </button>
    </div>
  );
}
