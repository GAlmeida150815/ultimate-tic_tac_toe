import React from "react";
import './timer.css';

export default function Timer({ timers, players }) {
    //Tempos dos timers
    const minutesX = Math.floor(timers.X.time / 60);
    const secondsX = timers.X.time % 60;
    const minutesO = Math.floor(timers.O.time / 60);
    const secondsO = timers.O.time % 60;

    return (
        <div className="timer-container">
            <div className="timer X">
            {players.P1}<br></br>
                <span>
                    {minutesX < 10 ? "0" + minutesX : minutesX}:
                    {secondsX < 10 ? "0" + secondsX : secondsX}
                </span>
            </div>
            <div className="timer O">
            {players.P2}<br></br>
                <span>
                    {minutesO < 10 ? "0" + minutesO : minutesO}:
                    {secondsO < 10 ? "0" + secondsO : secondsO}
                </span>
            </div>
        </div>
    );
}