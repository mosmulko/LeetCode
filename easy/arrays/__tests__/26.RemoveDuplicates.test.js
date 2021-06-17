const removeDuplicates = require("../26.RemoveDuplicates");

test("returns array length if there are no duplicates", () => {
  expect(removeDuplicates([1, 2, 3, 4])).toBe(4);
  expect(removeDuplicates([1, 2, 7, 9, 10])).toBe(5);
});

test("returns number of unique numbers when array has pairs of same numbers", () => {
  expect(removeDuplicates([1, 2, 2, 3, 4, 4])).toBe(4);
  expect(removeDuplicates([1, 1, 2, 2, 7, 9, 9, 10])).toBe(5);
});

test("returns number of unique numbers when array has multiples of same numbers", () => {
  expect(removeDuplicates([1, 2, 2, 2, 3, 4, 4, 4])).toBe(4);
  expect(removeDuplicates([1, 1, 2, 2, 7, 9, 9, 9, 9, 10])).toBe(5);
});
