function isSudokuValid(board) {
  const rows = {};
  const columns = {};
  for (let i = 0; i < 9; i++) {
    rows[i] = {};
    columns[i] = {};
  }
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      const field = board[row][col];
      if (field !== ".") {
        if (rows[row][field] || columns[col][field]) return false;
        rows[row][field] = true;
        columns[col][field] = true;
      }
    }
  }
  return true;
}

module.exports = isSudokuValid;
