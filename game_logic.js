let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

function boxClicked(e) {
  const id = e.target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerHasWon()) {
      playerText = `${currentPlayer} has won!`;
    }

    currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
  }
}

function playerHasWon() {}

restartBtn.addEventListener("click", restart);

function restart() {
  spaces.fill(null);

  boxes.forEach((box) => {
    box.innerText = "";
  });

  playerText = "Tic Tac Toe";

  currentPlayer = X_TEXT;
}

startGame();
