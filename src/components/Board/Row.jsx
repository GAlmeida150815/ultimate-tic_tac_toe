import Square from './Square';
import '../../assets/TicTacToe.css'

export default function Row({ gameIndex, row, rowIndex, handleClick, currentSquare }) {
    return (
        <div key={rowIndex} className="board-row">
            {row.map((square, squareIndex) => (
            <Square
                key={squareIndex}
                value={square}
                game={gameIndex}
                selected={
                currentSquare.game == gameIndex ? currentSquare.row == rowIndex ?  currentSquare.square == squareIndex ? true : false : false : false
                }
                onSquareClick={() =>
                    handleClick(
                        gameIndex,
                        rowIndex,
                        squareIndex
                    )
                }
            />
            ))}
        </div>
    );
}