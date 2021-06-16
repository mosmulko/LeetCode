function isSudokuValid(board) {
  const rows = {};
  for (let row = 0; row < board.length; row++) {
    rows[row] = {};
    for (let col = 0; col < board.length; col++) {
      const field = board[row][col];
      if (field !== ".") {
        if (rows[row][field]) return false;
        rows[row][field] = true;
      }
    }
  }
  return true;
}

module.exports = isSudokuValid;
