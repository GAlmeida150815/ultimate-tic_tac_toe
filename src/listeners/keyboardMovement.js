import { useEffect } from "react";
import { setValidSquare } from "../helpers";

export const KeyboardMovement = (keyPressed, currentSquare, games, setCurrentSquare, nextPlay, finished, handleClick) => {
    //Hook que trata do movimento por teclass
    useEffect(() => {
        if (keyPressed) {
            if (currentSquare.game >= 0 && currentSquare.row >= 0 && currentSquare.square >= 0) {
                const currGame = currentSquare.game;
                const currRow = currentSquare.row;
                const currSquare = currentSquare.square;

                if (games[currGame][currRow][currSquare]) {
                setValidSquare(games, setCurrentSquare, nextPlay, finished);
                }

                let nextGame = Number(currentSquare.game);
                let nextRow = currentSquare.row;
                let nextSquare = currentSquare.square;
                switch (keyPressed) {
                case "up": {
                    if (nextRow == 0 && (nextPlay >= 0 || nextGame < 3)) 
                    return;
                    
                    do {  
                    nextRow--;              
                    if (nextRow < 0) {
                        nextRow = 2;
                        do { 
                        nextGame -= 3;
                        if (nextGame < 0)
                            return;
                        } while (finished[nextGame].over);
                    }
                    } while (games[nextGame][nextRow][nextSquare])
                } break;

                case "down": {
                    if (nextRow == 2 && (nextPlay >= 0 || nextGame > 5)) 
                    return;
                    
                    do {  
                    nextRow++;              
                    if (nextRow > 2) {
                        nextRow = 0;
                        do { 
                        nextGame += 3;
                        if (nextGame > 8)
                            return;
                        } while (finished[nextGame].over);
                    }
                    } while (games[nextGame][nextRow][nextSquare]);
                } break;

                case "left": {
                    if (nextSquare == 0 && (nextPlay >= 0 || nextGame % 3 == 0)) 
                    return;
                    
                    do {  
                    nextSquare--;              
                    if (nextSquare < 0) {
                        nextSquare = 2;
                        do { 
                        nextGame--;
                        if (nextGame < 0)
                            return;
                        } while (finished[nextGame].over);
                    }
                    } while (games[nextGame][nextRow][nextSquare])
                } break;

                case "right": {
                    if (nextSquare == 2 && (nextPlay >= 0 || nextGame+1 % 3 == 0)) 
                    return;
                    
                    do {  
                    nextSquare++;              
                    if (nextSquare > 2) {
                        nextSquare = 0;
                        do { 
                        nextGame++;
                        if (nextGame > 8) 
                            return;
                        } while (finished[nextGame].over);
                    }
                    } while (games[nextGame][nextRow][nextSquare])
                } break;
                
                case "enter": {
                    if (currentSquare.game >= 0 && currentSquare.row >= 0 && currentSquare.square >= 0)
                    handleClick(currentSquare.game, currentSquare.row, currentSquare.square);
                    return;
                }
                }

                if (nextGame > 8 || nextGame < 0 || games[nextGame][nextRow][nextSquare] || finished[nextGame].over || (nextPlay >= 0 && nextGame != nextPlay)) 
                return;

                setCurrentSquare({game: nextGame, row: nextRow, square: nextSquare});
            } else if (currentSquare.game < 0) {
                setValidSquare(games, setCurrentSquare, nextPlay, finished);
            } 
        }
    },[keyPressed]);
}