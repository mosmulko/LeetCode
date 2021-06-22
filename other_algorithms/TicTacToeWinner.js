function whoWonTicTacToe(board) {
  const length = board.length;
  const rowLength = board[0].length;
  const rows = {};
  const columns = {};
  const leftAxis = {};
  const rightAxis = {};
  const leftAxisFields = {};
  const rightAxisFields = {};

  for (let i = 0; i < length; i++) {
    rows[i] = {};
    columns[i] = {};
  }

  for (let i = 0, j = rowLength - 1; i < length; i++, j--) {
    leftAxisFields[`${i}${i}`] = true;
    rightAxisFields[`${i}${j}`] = true;
  }

  for (let row = 0; row < length; row++) {
    for (let col = 0; col < rowLength; col++) {
      const field = board[row][col];
      const stringIndex = `${row}${col}`;
      if (field) {
        addOneToProp(rows[row], field);
        addOneToProp(columns[col], field);
        if (leftAxisFields[stringIndex]) {
          addOneToProp(leftAxis, field);
        }
        if (rightAxisFields[stringIndex]) {
          addOneToProp(rightAxis, field);
        }
        if (
          rows[row][field] === length ||
          columns[col][field] === length ||
          leftAxis[field] === length ||
          rightAxis[field] === length
        )
          return field;
      }
    }
  }
  return null;
}

function addOneToProp(obj, prop) {
  !obj[prop] ? (obj[prop] = 1) : obj[prop]++;
}

module.exports = whoWonTicTacToe;
