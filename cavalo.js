const board = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

const addMove = (x, y) => {
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && board[x][y] != "X") {
    route(x, y);
    return true;
  }
};

const addAllMoves = (x, y) => {
  addMove(x + 1, y + 2);
  addMove(x + 1, y - 2);
  addMove(x + 2, y + 1);
  addMove(x + 2, y - 1);
  addMove(x - 1, y + 2);
  addMove(x - 1, y - 2);
  addMove(x - 2, y - 1);
  addMove(x - 2, y + 1);
};

const route = (x, y) => {
  console.log(board[x][y]);
  board[x][y] = "X";
  do {
    addAllMoves(x, y);
  } while (board[x][y] != "X");
};

const getInitialMovement = (movement) => {
  let x = 0;
  let y = 0;

  for (let i of board) {
    if (i.includes(movement)) {
      x = board.indexOf(i);
    }
    for (let j of i) {
      if (j === movement) {
        y = i.indexOf(movement);
      }
    }
  }
  return addMove(x, y);
};

const args = process.argv.slice(2);
if (!args.length) {
  console.log("usage Ex: node knight.js [movement]");
  getInitialMovement("a1");
} else {
  getInitialMovement(args[0]);
}

console.log("\nCHECK IF YOU HAVE FILLED ALL HOUSES!!!\n");
console.log(board);
