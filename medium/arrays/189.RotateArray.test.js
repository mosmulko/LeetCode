const rotateArray = require("./189.RotateArray");

test("returns unchanged array if k = 0", () => {
  expect(rotateArray([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
});

test("returns unchanged array if lenght of array is 1", () => {
  expect(rotateArray([1], 3)).toEqual([1]);
});

test("returns rotated array if k = 1 and length is 2", () => {
  expect(rotateArray([1, 2], 1)).toEqual([2, 1]);
});

test("returns rotated array if k=1 and length > k*2", () => {
  expect(rotateArray([1, 2, 3], 1)).toEqual([3, 1, 2]);
  expect(rotateArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
  expect(rotateArray([1, 2, 3, 4, 5, 6], 1)).toEqual([6, 1, 2, 3, 4, 5]);
});

test("returns rotated array if k > 1 and length > k*2", () => {
  expect(rotateArray([1, 2, 3], 2)).toEqual([2, 3, 1]);
  expect(rotateArray([1, 2, 3, 4], 3)).toEqual([2, 3, 4, 1]);
  expect(rotateArray([1, 2, 3, 4, 5, 6], 2)).toEqual([5, 6, 1, 2, 3, 4]);
});

test("returns rotated array if k > length", () => {
  expect(rotateArray([1, 2], 3)).toEqual([2, 1]);
  expect(rotateArray([1, 2], 5)).toEqual([2, 1]);
  expect(rotateArray([1, 2, 3], 4)).toEqual([3, 1, 2]);
});
