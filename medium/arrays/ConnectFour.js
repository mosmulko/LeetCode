function whoWonConnectFour(board) {
  const numOfFields = 4;
  const length = board.length;
  const rowLength = board[0].length;
  const rows = {};
  const columns = {};
  const leftAxes = {};
  const rightAxes = {};

  for (let i = 0; i < length; i++) {
    rows[i] = [];
  }

  for (let i = 0; i < rowLength; i++) {
    columns[i] = [];
  }

  for (let i = -(rowLength - numOfFields); i <= length - numOfFields; i++) {
    leftAxes[i] = [];
  }

  for (let i = numOfFields - 1; i < rowLength - numOfFields + length; i++) {
    rightAxes[i] = [];
  }

  for (let row = 0; row < length; row++) {
    for (let col = 0; col < rowLength; col++) {
      const field = board[row][col];
      let winner =
        checkForWinnerInThisLine(rows[row], field, numOfFields) ||
        checkForWinnerInThisLine(columns[col], field, numOfFields) ||
        checkForWinnerIfValidAxis(leftAxes[row - col], field, numOfFields) ||
        checkForWinnerIfValidAxis(rightAxes[row + col], field, numOfFields);
      if (winner) return winner;
    }
  }
  return null;
}

function checkForWinnerIfValidAxis(axis, pawn, numOfFields) {
  return axis ? checkForWinnerInThisLine(axis, pawn, numOfFields) : null;
}

function checkForWinnerInThisLine(arr, pawn, numOfFields) {
  addOrReplacePawn(arr, pawn);
  if (arr.length === numOfFields) return pawn;
}

function addOrReplacePawn(arr, pawn) {
  if (arr.length === 0 && !pawn) return;
  if (arr[arr.length - 1] === pawn) {
    arr.push(pawn);
  } else {
    if (pawn) {
      arr.splice(0, arr.length, pawn);
    } else {
      arr.splice(0, arr.length);
    }
  }
}

module.exports = whoWonConnectFour;
