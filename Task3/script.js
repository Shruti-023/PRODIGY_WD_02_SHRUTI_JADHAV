let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let ai = "O";

function playerMove(index) {
  if (board[index] === "" && !checkWinner()) {
    board[index] = player;
    updateBoard();
    if (!checkWinner()) {
      aiMove();
    }
  }
}

function aiMove() {
  let empty = [];
  board.forEach((val, idx) => { if (val === "") empty.push(idx); });
  if (empty.length === 0) return;

  let move = empty[Math.floor(Math.random() * empty.length)];
  board[move] = ai;
  updateBoard();
  checkWinner();
}

function updateBoard() {
  document.querySelectorAll(".cell").forEach((cell, idx) => {
    cell.innerText = board[idx];
  });
}

function checkWinner() {
  const winCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let combo of winCombos) {
    const [a,b,c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById("winner").innerText = board[a] + " Wins!";
      return true;
    }
  }

  if (!board.includes("")) {
    document.getElementById("winner").innerText = "Draw!";
    return true;
  }

  return false;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
  document.getElementById("winner").innerText = "";
}
