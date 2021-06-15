const plusOne = require("./66.PlusOne");

test("ads 1 to last num of array if num !== 0", () => {
  expect(plusOne([4])).toEqual([5]);
  expect(plusOne([1, 2])).toEqual([1, 3]);
  expect(plusOne([1, 2, 7])).toEqual([1, 2, 8]);
});

test("ads 1 to last num of array if nums[i]== 9 && nums[i--] != 9", () => {
  expect(plusOne([4, 9])).toEqual([5, 0]);
  expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
  expect(plusOne([1, 2, 7, 9])).toEqual([1, 2, 8, 0]);
});
