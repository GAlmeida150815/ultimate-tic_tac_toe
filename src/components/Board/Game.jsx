import Row from "./Row.jsx";
import '../../assets/TicTacToe.css'

export default function Game({ gameIndex, game, handleClick, finished, nextPlay, xIsNext, currentSquare }) {
    return (
        <div
            key={gameIndex}
            id={gameIndex}
            className={
                finished[gameIndex].over ? "game finished" : (nextPlay < 0 || gameIndex === nextPlay ? `game playable ${xIsNext ? 'X' : 'O'}` : "game")
            }                      
            data-symbol={
                finished[gameIndex].over
                ? finished[gameIndex].symbol
                : ""
            }
        >
        {game.map((row, gameRowIndex) => (
            <Row
                key={gameRowIndex}
                gameIndex={gameIndex}
                row={row}
                rowIndex={gameRowIndex}
                handleClick={handleClick}
                currentSquare={currentSquare}
            />
        ))}
        </div>
    );
}