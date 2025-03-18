import { useEffect } from "react";

export  const OnLoad = (isVSAI, players, setXIsNext, setTimers, setKeyPressed, player1Name, player2Name) => {
    //O componente foi chamado pela primeira vez
    useEffect(() => {

        const firstPlayer = Math.floor(Math.random() * 2);
        const symbol = firstPlayer === 0 ? 'X' : 'O';

        if (isVSAI) { 
            players.P1 = "Player";
            players.P2 = "Cpu";
        } else {
            players.P1 = Math.floor(Math.random() * 2) === 0 ? player1Name : player2Name;
            players.P2 = players.P1 === player1Name ? player2Name : player1Name;
        }

        if (symbol !== 'X') { 
            setXIsNext(false);
        }

        let xInterval, oInterval;
    
        xInterval = setInterval(() => {
            setTimers((prevTimers) => {
                const { X, O } = prevTimers;

                if (X.time > 0 && !X.paused) {
                const newX = { ...X, time: X.time - 1 };
                return { X: newX, O };
                }

                return prevTimers;
            });
        }, 1000);

        oInterval = setInterval(() => {
        setTimers((prevTimers) => {
            const { X, O } = prevTimers;

            if (O.time > 0 && !O.paused) {
            const newO = { ...O, time: O.time - 1 };
            return { X, O: newO };
            }

            return prevTimers;
        });
        }, 1000);
    
        return () => {
            clearInterval(xInterval);
            clearInterval(oInterval);
        };
}, []);
} 