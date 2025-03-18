//Procura o quadrado jogável e insere no state currentSquare
function setValidSquare(games, setCurrentSquare, nextPlay, finished) {
    let game = nextPlay;
    let row = 0;
    let square = 0;

    if (nextPlay < 0) {
        game = 0;
        while (finished[game].over) {
            game++;
        }
    }

    while (games[game][row][square]) {
        square++;
        if (square > 2) {
            square = 0;
            row++;
        }
    }

    setCurrentSquare({ game, row, square });
}

export default setValidSquare; 