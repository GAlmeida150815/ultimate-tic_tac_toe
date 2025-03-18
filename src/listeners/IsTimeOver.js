import { useEffect } from "react";

export const IsTimeOver = (timers, setWinner) => {
    //Verifica se o tempo de algum acabou
    useEffect(() => {
        if (timers.X.time == 0) {
            setWinner("O");
        }
        if (timers.O.time == 0) {
            setWinner("X");
        }
    }, [timers])
}