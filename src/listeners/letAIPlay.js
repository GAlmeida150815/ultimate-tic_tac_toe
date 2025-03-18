import { useEffect } from "react";

export const LetAIPlay = (isVSAI, xIsNext, winner, playRandomSquare, setXIsNext, nextPlay) => {
    //Hook para deixar o bot jogar depois de uma jogada de player
    useEffect(() => {
        if (isVSAI && !xIsNext) {
            setTimeout(() => {
            if (winner == null) {
                playRandomSquare(nextPlay);
                setXIsNext(!xIsNext);
            }
        }, 200);
        }
    }, [xIsNext, nextPlay, setXIsNext]);
}