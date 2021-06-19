function whoWonConnectFour(board) {
  const length = board.length;
  const rowLength = board[0].length;
  const rows = {};
  const columns = {};
  const leftAxises = {};

  for (let i = 0; i < length; i++) {
    rows[i] = [];
  }

  for (let i = 0; i < rowLength; i++) {
    columns[i] = [];
  }

  for (let i = 4 - rowLength; i <= length - 4; i++) {
    leftAxises[i] = [];
  }

  for (let row = 0; row < length; row++) {
    for (let col = 0; col < rowLength; col++) {
      const field = board[row][col];
      if (field) {
        addOrReplacePawn(rows[row], field);
        addOrReplacePawn(columns[col], field);
        if (leftAxises[row - col]) {
          addOrReplacePawn(leftAxises[row - col], field);
          if (leftAxises[row - col].length === 4) return field;
        }

        if (rows[row].length === 4 || columns[col].length === 4) return field;
      }
    }
  }
  return null;
}

function addOrReplacePawn(arr, pawn) {
  if (arr[arr.length - 1] === pawn) {
    arr.push(pawn);
  } else {
    arr.splice(0, arr.length, pawn);
  }
}

module.exports = whoWonConnectFour;
