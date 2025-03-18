import '../../assets/TicTacToe.css'

export default function Square({ value, selected, onSquareClick }) {
    return (
        <button
        className={`square ${value ? value : ''} ${selected ? 'selected' : ''}`}
        onClick={onSquareClick}
        >
        <span>{value}</span>
        </button>
    );
}