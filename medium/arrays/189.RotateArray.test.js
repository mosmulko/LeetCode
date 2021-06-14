const rotateArray = require("./189.RotateArray");

test("return unchanged array if k = 0", () => {
  expect(rotateArray([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
});

test("return unchanged array if lenght of array is 1", () => {
  expect(rotateArray([1], 3)).toEqual([1]);
});
