import { useEffect } from "react";

export const ResetHighlighted = (setCurrentSquare, games) => {
    //Reseta o quadrado highlited
    useEffect(() => {
        setCurrentSquare({ game: -1, row: -1 , square: -1});
    },[games]);
}