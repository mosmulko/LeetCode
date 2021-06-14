const rotateArray = require("./189.RotateArray");

test("return unchanged array if k = 0", () => {
  expect(rotateArray([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
});

test("return unchanged array if lenght of array is 1", () => {
  expect(rotateArray([1], 3)).toEqual([1]);
});

test("return rotated array if k = 1 and length is 2", () => {
  expect(rotateArray([1, 2], 1)).toEqual([2, 1]);
});
