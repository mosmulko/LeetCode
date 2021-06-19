const whoWonConnectFour = require("../ConnectFour");

const emptyBoard = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];
const boardXInRow = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, "X", "X", "X", "X", null, null],
  ["O", "X", "O", "O", "O", "X", null],
];
const boardOInColumn = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, "O", null, null],
  ["X", null, null, null, "O", null, null],
  ["O", "X", "X", "X", "O", null, null],
  ["O", "X", "O", "O", "O", "X", null],
];
const boardXInLeftAxis = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, "X", null, null, "X", null, null],
  ["X", "O", "X", null, "O", null, null],
  ["O", "X", "X", "X", "O", null, null],
  ["O", "X", "O", "O", "X", "X", null],
];

test("returns null if game hasn't started yet or there's draw", () => {
  expect(whoWonConnectFour(emptyBoard)).toBe(null);
});

test("returns X when X has 4 in a row", () => {
  expect(whoWonConnectFour(boardXInRow)).toBe("X");
});

test("returns O when O has 4 in a column", () => {
  expect(whoWonConnectFour(boardOInColumn)).toBe("O");
});

test("returns X when one of left axis has 4 Xs", () => {
  expect(whoWonConnectFour(boardXInLeftAxis)).toBe("X");
});
