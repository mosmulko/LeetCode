function whoWonConnectFour(board) {
  const numOfFields = 4;
  const length = board.length;
  const rowLength = board[0].length;
  const rows = {};
  const columns = {};
  const leftAxes = {};
  const rightAxes = {};

  addStackForEachValidLine(rows, 0, length - 1);
  addStackForEachValidLine(columns, 0, rowLength - 1);
  addStackForEachValidLine(
    leftAxes,
    -(rowLength - numOfFields),
    length - numOfFields
  );
  addStackForEachValidLine(
    rightAxes,
    numOfFields - 1,
    rowLength - numOfFields + length
  );

  for (let row = 0; row < length; row++) {
    for (let col = 0; col < rowLength; col++) {
      const field = board[row][col];
      const winner =
        checkForWinnerInStack(rows[row], field, numOfFields) ||
        checkForWinnerInStack(columns[col], field, numOfFields) ||
        checkForWinnerIfValidAxis(leftAxes[row - col], field, numOfFields) ||
        checkForWinnerIfValidAxis(rightAxes[row + col], field, numOfFields);
      if (winner) return winner;
    }
  }
  return null;
}

function addStackForEachValidLine(lineType, firstLine, lastLine) {
  for (let line = firstLine; line <= lastLine; line++) {
    lineType[line] = [];
  }
}

function checkForWinnerIfValidAxis(axis, pawn, numOfFields) {
  return axis ? checkForWinnerInStack(axis, pawn, numOfFields) : null;
}

function checkForWinnerInStack(arr, pawn, numOfFields) {
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
