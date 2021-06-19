function whoWonTicTacToe(board) {
  const rows = {};
  const columns = {};
  for (let i = 0; i < 9; i++) {
    rows[i] = {};
    columns[i] = {};
  }
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const field = board[row][col];
      if (field) {
        !rows[row][field] ? (rows[row][field] = 1) : rows[row][field]++;
        !columns[col][field]
          ? (columns[col][field] = 1)
          : columns[col][field]++;
        if (rows[row][field] === 3 || columns[col][field] === 3) return field;
      }
    }
  }
  return null;
}

module.exports = whoWonTicTacToe;
