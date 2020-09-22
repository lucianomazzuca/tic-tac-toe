const gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  //Cache DOM
  let squares = document.querySelectorAll(".square");

  //Bind events
  squares.forEach((square) => {
    square.addEventListener("click", addMark);
  });

  function addMark(mark) {
    if (this.innerText == 0) {
      if (game.checkTurn() == "p1") {
        this.innerText = player1.mark;
        board[this.id] = this.innerText;
      } else {
        this.innerText = player2.mark;
        board[this.id] = this.innerText;
      }
      game.changeTurn();
      game.checkWinner();
    }
  }
  //Methods
  function render() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].innerText = board[i];
    }
  }

  render();

  function reset() {
    board = ["", "", "", "", "", "", "", "", ""];
  }
  function showBoard() {
    return board;
  }

  return {
    showBoard: showBoard,
    render,
    reset,
  };
})();

const game = (function () {

  let currentTurn = "p1";

  const changeTurn = function () {
    if (currentTurn == "p1") {
      currentTurn = "p2";
    } else {
      currentTurn = "p1";
    }
  };

  const checkTurn = function () {
    return currentTurn;
  };

  const displayWinner = function (winner) {
    document.querySelector(".display").innerText = "The winner is: " + winner;
  };

  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = function () {
    let board = gameboard.showBoard();
    WINNING_COMBINATIONS.forEach((combination) => {
      if (
        board[combination[0]] == "X" &&
        board[combination[1]] == "X" &&
        board[combination[2]] == "X"
      ) {
        endGame("player1");
      } else if (
        board[combination[0]] == "O" &&
        board[combination[1]] == "O" &&
        board[combination[2]] == "O"
      ) {
        endGame("Player 2");
      }
    });
  };

  const endGame = function (winner) {
    gameboard.reset();
    gameboard.render();
    displayWinner(winner);
    currentTurn = "p1";
  };

  return {
    changeTurn,
    checkTurn,
    checkWinner,
  };
})();

const Players = function (mark) {
  let score = 0;

  const win = function () {
    score++;
  };

  return {
    mark,
    win,
  };
};

let player1 = Players("X");
let player2 = Players("O");

console.log(player1);
