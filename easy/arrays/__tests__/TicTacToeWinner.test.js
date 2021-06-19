const whoWonTicTacToe = require("../TicTacToeWinner");

const emptyBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const draw = [
  ["O", "X", "X"],
  ["X", "X", "O"],
  ["O", "O", "X"],
];
const boardXInRow = [
  ["X", "X", "X"],
  ["O", "X", "O"],
  ["O", "O", "X"],
];

const boardXInColumn = [
  [null, "X", "O"],
  [null, "X", "O"],
  [null, "X", null],
];

const boardOLeftAxis = [
  ["O", "X", "X"],
  [null, "O", "X"],
  [null, "X", "O"],
];

const boardORightAxis = [
  ["O", "X", "O"],
  [null, "O", "X"],
  ["O", "X", null],
];

test("returns null if game hasn't started yet or there's draw", () => {
  expect(whoWonTicTacToe(emptyBoard)).toBe(null);
  expect(whoWonTicTacToe(draw)).toBe(null);
});

test("returns X if X has 3 in a row", () => {
  expect(whoWonTicTacToe(boardXInRow)).toBe("X");
});

test("returns X if X has 3 in a column", () => {
  expect(whoWonTicTacToe(boardXInColumn)).toBe("X");
});

test("returns O if all fields of left axis are O", () => {
  expect(whoWonTicTacToe(boardOLeftAxis)).toBe("O");
});

test("returns O if all fields of right axis are O", () => {
  expect(whoWonTicTacToe(boardORightAxis)).toBe("O");
});
