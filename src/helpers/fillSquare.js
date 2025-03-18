//Joga no quadrado definido
function fillSquare(gameIndex, rowIndex, squareIndex, symbol, games, setGames) {
    const updatedGames = [...games];
    const game = [...updatedGames[gameIndex]];
    const row = [...game[rowIndex]];
    row[squareIndex] = symbol;
    game[rowIndex] = row;
    updatedGames[gameIndex] = game;
    setGames(updatedGames);
    return game;
}

export default fillSquare;