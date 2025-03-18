import React from "react";
import Game from './Game';
import '../../assets/TicTacToe.css'

export default function Board({ games, handleClick, finished, nextPlay, xIsNext, currentSquare, gamesPerRow }) {
    return (
        <div className="board">
        {Array.from({ length: Math.ceil(games.length / gamesPerRow) }).map((_, rowIndex) => {
            const startGameIndex = rowIndex * gamesPerRow;
            const endGameIndex = startGameIndex + gamesPerRow;
            const rowGames = games.slice(startGameIndex, endGameIndex);

            return (
                <div key={rowIndex} className="board-row">
                {rowGames.map((game, columnIndex) => {
                    const gameIndex = startGameIndex + columnIndex;
                    return (
                    <Game 
                        key={gameIndex}
                        gameIndex={gameIndex}
                        game={game}
                        handleClick={handleClick}
                        finished={finished}
                        nextPlay={nextPlay}
                        xIsNext={xIsNext}
                        currentSquare={currentSquare}
                    />
                    );
                })}
                </div>
            );
            
            }
        )}
        </div>
    );
}