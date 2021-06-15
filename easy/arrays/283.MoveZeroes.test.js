const moveZeroes = require("./283.MoveZeroes");

test("returns unchanged array if there are no zeroes or 0 is at the end", () => {
  expect(moveZeroes([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  expect(moveZeroes([1, 2, 7, 9, 10])).toEqual([1, 2, 7, 9, 10]);
  expect(moveZeroes([1, 2, 7, 9, 10, 0])).toEqual([1, 2, 7, 9, 10, 0]);
});

test("returns changed array if there are zeros, but non at the beginning", () => {
  expect(moveZeroes([1, 0, 2, 0, 3, 0, 4])).toEqual([1, 2, 3, 4, 0, 0, 0]);
  expect(moveZeroes([1, 2, 7, 0, 0, 9, 0, 10])).toEqual([
    1, 2, 7, 9, 10, 0, 0, 0,
  ]);
});

test("returns changed array if there is zero at the beginning", () => {
  expect(moveZeroes([0, 1, 2, 3, 4])).toEqual([1, 2, 3, 4, 0]);
  expect(moveZeroes([0, 0, 1, 2, 0, 0, 7, 9, 10])).toEqual([
    1, 2, 7, 9, 10, 0, 0, 0, 0,
  ]);
  expect(moveZeroes([0, 0, 0, 1, 0, 2, 7, 9, 0, 0, 10, 0])).toEqual([
    1, 2, 7, 9, 10, 0, 0, 0, 0, 0, 0, 0,
  ]);
});
