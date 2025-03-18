import { useEffect } from "react";

export const ListenTimers = (xIsNext, timers, nextPlay, finished, setXIsNext, isVSAI) => {
    //Hook para mostrar qual jogo pode ser jogado
    useEffect(() => {
        //const ggs = document.getElementsByClassName("game");
        const next = xIsNext ? "X" : "O";
        const prev = !xIsNext ? "X" : "O";
        if (next == 'X') {
            timers.X.paused = false;
            timers.O.paused = true;
        }
        else  {
            timers.X.paused = true;
            timers.O.paused = false;
        }

        if (isVSAI && next == 'O')
            return;
        /*for (let i = 0; i < ggs.length; i++) {
        ggs[i].classList.remove("playable", prev);
        }

        if (nextPlay < 0) {
        for (let i = 0; i < ggs.length; i++) {
            if (!finished[i].over) ggs[i].classList.add("playable", next);
        }
        } else {
        ggs[nextPlay].classList.add("playable", next);
        }*/
    }, [nextPlay, finished, xIsNext, setXIsNext]);
}