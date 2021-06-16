function isSudokuValid(board) {
  const rows = {};
  const columns = {};
  const boxes = {};
  for (let i = 0; i < 9; i++) {
    rows[i] = {};
    columns[i] = {};
    boxes[i] = {};
  }
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const field = board[row][col];
      const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      if (field !== ".") {
        if (rows[row][field] || columns[col][field] || boxes[box][field])
          return false;
        rows[row][field] = true;
        columns[col][field] = true;
        boxes[box][field] = true;
      }
    }
  }
  return true;
}

module.exports = isSudokuValid;
