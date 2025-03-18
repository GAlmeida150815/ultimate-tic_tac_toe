import { useEffect } from "react";

export const IsGameOver = (nextPlay, finished, setNextPlay) => {
    //Hook para verificar se o jogo acabou, se sim a próxima jogada é livre
    useEffect(() => {
        if (nextPlay >= 0 && finished[nextPlay].over) {
            setNextPlay(-1);
        }

    }, [nextPlay, finished]);
}