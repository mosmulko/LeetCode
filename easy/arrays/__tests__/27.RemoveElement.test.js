const removeElement = require("../27.RemoveElement");

test("returns array's length if there's no element in the array", () => {
  expect(removeElement([1, 2, 3, 4], 5)).toBe(4);
});

test("returns number of elements that are not value element", () => {
  expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
});

test("returns 0 if array contains only value elements", () => {
  expect(removeElement([3, 3], 3)).toBe(0);
});
