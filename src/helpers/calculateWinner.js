//Calcula se o jogo dado já tem algum vencedor
function calculateWinner(game, gameIndex, finished, setFinishedGame, wins, setWin) {
    let winner = null;

    //Horizontais
    for (let row = 0; row < game.length; row++) {
      const symbol = game[row][0];
      if (symbol && symbol === game[row][1] && symbol === game[row][2]) {
        winner = symbol;
      }
    }

    //Verticais
    for (let col = 0; col < game.length; col++) {
      const symbol = game[0][col];
      if (symbol && symbol === game[1][col] && symbol === game[2][col]) {
        winner = symbol;
      }
    }

    //Diagonais
    const centerSymbol = game[1][1];
    if (centerSymbol) {
      if (centerSymbol === game[0][0] && centerSymbol === game[2][2]) {
        winner = centerSymbol;
      }
      if (centerSymbol === game[2][0] && centerSymbol === game[0][2]) {
        winner = centerSymbol;
      }
    }

    //Dá update ao state finished!
    const updatedFinished = [...finished];
    if (winner) {
      updatedFinished[gameIndex] = { over: true, symbol: winner };
      setFinishedGame(updatedFinished);
      winner === "X" ? wins.xWon++ : wins.yWon++;
      setWin(wins);
      return winner;
    }

    return null;
}

export default calculateWinner;