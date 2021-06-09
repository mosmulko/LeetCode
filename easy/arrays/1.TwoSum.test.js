const twoSum = require("./1.TwoSum");

test("returns indexes of only 2 elements if they add up to the second argument", () => {
  expect(twoSum([1, 2], 3)).toEqual([0, 1]);
  expect(twoSum([1, 3], 3)).not.toEqual([0, 1]);
});

test("returns an error message if arguments don't add up", () => {
  expect(twoSum([1, 0], 3)).toEqual("no matching indexes");
});

test("returns indexes of numbers that are in consecutive order", () => {
  expect(twoSum([1, 2, 3], 5)).toEqual([1, 2]);
  expect(twoSum([1, 2, 3, 4, 5], 7)).toEqual([2, 3]);
});

test("returns indexes of numbers that are not in order", () => {
  expect(twoSum([1, 2, 3], 4)).toEqual([0, 2]);
  expect(twoSum([0, 2, 3, 6, 5], 7)).toEqual([1, 4]);
});
