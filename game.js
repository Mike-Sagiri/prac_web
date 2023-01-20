const gameBoard = document.getElementById("game-board");
let gameOver = false;
let gameStart = false;
let gameLoop;
const main = () => {
    update();
    draw();
    if (gameOver) {
        alert("Game Over");
        clearInterval(gameLoop);
    }
}



const update = () => {
    console.log("Updating");
    updateSnake();
    updateFood();
    gameOver = isGameOver();
}

const draw = () => {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

const isGameOver = () => {
    return snakeOutOfBounds() || snakeIntersectSelf();
}
draw();alert("Tap space to start or pause");