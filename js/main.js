/*----- constants -----*/
const lookup = {
  null: "white", //<-----could be image URLs
  "1": "black",
  "-1": "grey",
};

const winningCombos = [];

/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/
const squaresEl = document.querySelectorAll("tr td div");
//   const message = document.querySelector("h1");
const replayEl = document.querySelector("#replay");

/*----- event listeners -----*/
document.querySelector("#replay").addEventListener("click", init);
document.querySelector(".board").addEventListener("click", handleMove);

/*----- functions -----*/
function init() {
  board = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  turn = 1;
  winner = null;
  render();
}

function handleMove(event) {
  const index = parseInt(event.target.id.replace("sp", ""));
  if (board[index]) {
    return;
  }
  board[index] = turn;
  turn *= -1;
  winner = null; //winning();
  render();
}

function render() {
  board.forEach(function (square, idx) {
    squaresEl[idx].style.background = lookup[square];
  });
}
init();
