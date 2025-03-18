import React, { useState } from "react";
import Board from "./components/Board/Board.jsx";
import Timer from "./components/timer/timer.jsx";

import { calculateWinner, fillSquare, isFull } from './helpers';

import * as listeners from "./listeners";

export default function TicTacToe({ isVSAI, onFinish, player1Name , player2Name }) {
  // #region States
  
  const [xIsNext, setXIsNext] = useState(true);
  const [games, setGames] = useState(
      Array(9).fill(Array(3).fill(Array(3).fill(null)))
  );
  const [finished, setFinishedGame] = useState(
      Array(9).fill({ over: false, symbol: null })
  );
  const [winner, setWinner] = useState(null);
  const [wins, setWin] = useState({ xWon: 0, yWon: 0 });
  const [nextPlay, setNextPlay] = useState(-2);
  const [players, setPlayers] = useState({ P1: null, P2: null});
  const [keyPressed, setKeyPressed] = useState(null);
  const [currentSquare, setCurrentSquare] = useState({ game: -1, row: -1 , square: -1});

  //Timers
  const [timers, setTimers] = useState({ X: { paused: true, time: 5 *60 }, O: { paused: true, time: 5 *60 } });

  const gamesPerRow = 3;

  // #endregion
  
  // #region Game Logic

  //Handler para o click do jogador
  function handleClick(gameIndex, rowIndex, squareIndex) {
      if (
          winner ||
          finished[gameIndex].over ||
          games[gameIndex][rowIndex][squareIndex] ||
          (nextPlay >= 0 && nextPlay != gameIndex) ||
          timers.X.time == 0 || timers.O.time == 0
      )
          return;

      //Fazer a jogada\
      const game = fillSquare(
          gameIndex,
          rowIndex,
          squareIndex,
          xIsNext ? "X" : "O",
          games,
          setGames
      );

      //Determinar o próximo jogo a ser jogado (Será qualquer um caso o jogo tiver acabado)
      const gameToPlay = rowIndex * 3 + squareIndex;

      if (!finished[gameToPlay].over) setNextPlay(gameToPlay);
      else setNextPlay(-1);

      //Verifica se o jogo foi vencido
      calculateWinner(game, gameIndex, finished, setFinishedGame, wins, setWin);
      const updatedFinished = [...finished];

      //Se o jogo estiver cheio, dá como acabado e empate
      if (isFull(game)) {
          updatedFinished[gameIndex] = { over: true, symbol: "=" };
          setFinishedGame(updatedFinished);
      }

      if (winner != null) return;

      //Troca o jogador
      setXIsNext(!xIsNext);
  }

  //Simula uma jogada random (dentro de um jogo possivel)
  function playRandomSquare(game) {
    while (true) {
        const originalGame = game;
        const updFin = [...finished];
        if (nextPlay < 0) {
            while (originalGame == game || updFin[game].over) {
            game = Math.floor(Math.random() * 8);
            }
        }

        while (true) {
            const row = Math.floor(Math.random() * 3);
            const square = Math.floor(Math.random() * 3); 
            if (games[game][row][square] == null) {
            const gamePlayed = fillSquare(game, row, square, "O", games, setGames);

            calculateWinner(gamePlayed, game, finished, setFinishedGame, wins, setWin);

            const gameToPlay = row * 3 + square;
            if (!finished[gameToPlay].over) {
                setNextPlay(gameToPlay);
            } else {
                setNextPlay(-1);
            }

            if (isFull(games[game])) {
                let updatedFinished = [...finished];
                updatedFinished[game] = { over: true, symbol: "=" };
                setFinishedGame(updatedFinished);
            }

            return;
            }
        }
    }
  }

  // #endregion

  // #region Listeners

  listeners.KeyboardMovement(keyPressed, currentSquare, games, setCurrentSquare, nextPlay, finished, handleClick);
  listeners.ResetHighlighted(setCurrentSquare, games);
  listeners.OnLoad(isVSAI, players, setXIsNext, setTimers, setKeyPressed, player1Name, player2Name);
  listeners.IsTimeOver(timers, setWinner);
  listeners.CheckWin(winner, players, onFinish);
  listeners.IsGameOver(nextPlay, finished, setNextPlay);
  listeners.LetAIPlay(isVSAI, xIsNext, winner ,playRandomSquare, setXIsNext, nextPlay);
  listeners.ListenTimers(xIsNext, timers, nextPlay, finished, setXIsNext, isVSAI)
  listeners.EndGame(finished, currentSquare, setCurrentSquare, wins, setWinner);
  listeners.MovementListeners(setKeyPressed);
  
  // #endregion

  //Hook para dar ao utilizador a saber qual quadrado está a "sobrevoar"
  /*useEffect(() => {
    if (currentSquare.game != -1) {
      const currGame = document.querySelectorAll(`div.game`)[currentSquare.game];
      const currRow = currGame.querySelectorAll(`div.board-row`)[currentSquare.row];
      const currSquare = currRow.querySelectorAll(`button.square`)[currentSquare.square];
      
      currSquare.classList.add("selected");
    }
  },[currentSquare]);*/

  return (
    <div>
      <Timer 
        timers={timers}
        players={players}
      />
      <Board 
        games={games}
        handleClick={handleClick}
        finished={finished}
        nextPlay={nextPlay}
        xIsNext={xIsNext}
        currentSquare={currentSquare}
        gamesPerRow={gamesPerRow}
      />
    </div>
  );  
}