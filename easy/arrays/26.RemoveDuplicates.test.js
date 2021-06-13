const removeDuplicates = require("./26.RemoveDuplicates");

test("returns array length if there are no duplicates", () => {
  expect(removeDuplicates([1, 2, 3, 4])).toBe(4);
  expect(removeDuplicates([1, 2, 7, 9, 10])).toBe(5);
});
