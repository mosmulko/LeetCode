function whoWonTicTacToe(board) {
  const rows = {};
  const columns = {};
  const leftAxis = {};
  const rightAxis = {};
  const leftAxisFields = {};
  const rightAxisFields = {};

  for (let i = 0; i < 9; i++) {
    rows[i] = {};
    columns[i] = {};
  }

  for (let i = 0, j = 2; i < 3; i++, j--) {
    leftAxisFields[`${i}${i}`] = true;
    rightAxisFields[`${i}${j}`] = true;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
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
          rows[row][field] === 3 ||
          columns[col][field] === 3 ||
          leftAxis[field] === 3 ||
          rightAxis[field] === 3
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
