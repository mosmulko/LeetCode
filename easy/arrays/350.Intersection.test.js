const findIntersection = require("./350.Intersection");

test("returns empty array if one of arguments is empty", () => {
  expect(findIntersection([], [1, 2, 3])).toEqual([]);
  expect(findIntersection([1, 2], [])).toEqual([]);
});
