const plusOne = require("./66.PlusOne");

test("ads 1 to last num of array if num !== 0", () => {
  expect(plusOne([4])).toEqual([5]);
  expect(plusOne([1, 2])).toEqual([1, 3]);
  expect(plusOne([1, 2, 7])).toEqual([1, 2, 8]);
});
