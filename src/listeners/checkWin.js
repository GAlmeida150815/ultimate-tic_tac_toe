import { useEffect } from "react";

export const CheckWin = (winner, players, onFinish) => {
    //Verifica se alguem ganhou
    useEffect(() => {
        if (winner) {
            const name = winner == '=' ? "empate" : winner == 'X' ? players.P1 : players.P2 ;

            onFinish(name);
        }
    }, [winner])
}