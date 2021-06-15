const moveZeroes = require("./283.MoveZeroes");

test("returns array length if there are no zeroes", () => {
  expect(moveZeroes([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  expect(moveZeroes([1, 2, 7, 9, 10])).toEqual([1, 2, 7, 9, 10]);
});
