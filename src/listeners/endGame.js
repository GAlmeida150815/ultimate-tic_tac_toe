import { useEffect } from "react";

export const EndGame = (finished, currentSquare, setCurrentSquare, wins, setWinner) => {
    //jogo acabado
    useEffect(() => {
        let x = 0;
        for (let i = 0; i < finished.length; i++) {
            if (finished[i].over) x++;
        }

        if (currentSquare.game > 0 && finished[currentSquare.game].over)
            setCurrentSquare({game : -1});
        
        if (x == finished.length) {
            //ACABOU O JOGO
            if (wins.xWon > wins.yWon) setWinner("X");
            else if (wins.xWon < wins.yWon) setWinner("Y");
            else setWinner("=");
        }
    }, [finished]);
}