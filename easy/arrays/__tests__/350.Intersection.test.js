const findIntersection = require("../350.Intersection");

test("returns empty array if one of arguments is empty", () => {
  expect(findIntersection([], [1, 2, 3])).toEqual([]);
  expect(findIntersection([1, 2], [])).toEqual([]);
});

test("returns array of 1 intersection", () => {
  expect(findIntersection([2], [1, 2, 3])).toContain(2);
  expect(findIntersection([3], [1, 2, 3])).toContain(3);
});

test("returns array of all intersection numbers", () => {
  expect(findIntersection([4, 9, 5], [9, 4, 9, 8, 4])).toContain(4);
  expect(findIntersection([4, 9, 5], [9, 4, 9, 8, 4])).toContain(9);
});
