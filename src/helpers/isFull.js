//Verifica se o jogo está cheio (empate)
function isFull(game) {
    for (let row = 0; row < game.length; row++) {
    for (let square = 0; square < game[row].length; square++) {
        if (game[row][square] == null) return false;
    }
    }
    return true;
}

export default isFull;