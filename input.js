let inputDirection = { x: 0, y: 1 };
let lastInputDirection = { x: 0, y: 1 };

window.addEventListener('keydown', event => {
    if (!gameStart) {
        if (event.key === " ") {
            gameStart = true;
            SNAKE_SPEED = 5;
            gameLoop = setInterval(main, 1000 / SNAKE_SPEED);
            return;
        }
        return;
    }
    if (event.key == " ") {
        console.log("taping space");
        if (SNAKE_SPEED === 0) {
            SNAKE_SPEED = 5;
            gameLoop = setInterval(main, 1000 / SNAKE_SPEED);
        }

        else {
            clearInterval(gameLoop);
            SNAKE_SPEED = 0;
        }
    }
    if (event.key === "ArrowUp" && lastInputDirection.x !== 0) {
        inputDirection = { x: 0, y: -1 };
    } else if (event.key === "ArrowDown" && lastInputDirection.x !== 0) {
        inputDirection = { x: 0, y: 1 };
    } else if (event.key === "ArrowRight" && lastInputDirection.y !== 0) {
        inputDirection = { x: 1, y: 0 };
    } else if (event.key === "ArrowLeft" && lastInputDirection.y !== 0) {
        inputDirection = { x: -1, y: 0 };
    }

})

const getInputDirection = () => {
    lastInputDirection = inputDirection;
    return inputDirection;
}