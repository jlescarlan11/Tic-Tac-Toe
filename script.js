const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };
  const getBoard = () => board;

  const setBoard = (index, marker) => {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    } else {
      return false;
    }
  };

  return { resetBoard, getBoard, setBoard };
})();

const Player = (name, marker) => {
  return { name, marker };
};

const GameController = (function () {
  let player1;
  let player2;
  let currectActivePlayer;

  const startGame = (name1, name2) => {
    player1 = Player(name1, "X");
    player2 = Player(name2, "O");

    currentPlayer = player1;
    Gameboard.resetBoard();
  };

  const playTurn = (index) => {
    if (Gameboard.setBoard(index, currentActivePlayer.marker)) {
    }
  };
})();

const UpdateGame = (function () {
  const cells = document.querySelectorAll(".cell");
  const startButton = document.querySelector("#start-button");
  const restartButton = document.querySelector("#restart-button");
  const playerInputs = document.querySelector("#player-inputs");
  const gameBoard = document.querySelector("game-board");
  const result = document.getElementById("result");
})();
