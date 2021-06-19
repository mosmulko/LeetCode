function whoWonConnectFour(board) {
  const numOfFields = 4;
  const length = board.length;
  const rowLength = board[0].length;
  const rows = {};
  const columns = {};
  const leftAxises = {};
  const rightAxises = {};

  for (let i = 0; i < length; i++) {
    rows[i] = [];
  }

  for (let i = 0; i < rowLength; i++) {
    columns[i] = [];
  }

  for (let i = -(rowLength - numOfFields); i <= length - numOfFields; i++) {
    leftAxises[i] = [];
  }

  for (let i = numOfFields - 1; i < rowLength - numOfFields + length; i++) {
    rightAxises[i] = [];
  }

  for (let row = 0; row < length; row++) {
    for (let col = 0; col < rowLength; col++) {
      const field = board[row][col];
      if (field) {
        addOrReplacePawn(rows[row], field);
        addOrReplacePawn(columns[col], field);
        if (leftAxises[row - col]) {
          addOrReplacePawn(leftAxises[row - col], field);
          if (leftAxises[row - col].length === numOfFields) return field;
        }
        if (rightAxises[row + col]) {
          addOrReplacePawn(rightAxises[row + col], field);
          if (rightAxises[row + col].length === numOfFields) return field;
        }
        if (
          rows[row].length === numOfFields ||
          columns[col].length === numOfFields
        )
          return field;
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
