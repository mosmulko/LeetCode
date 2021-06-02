const findNumOfUniquePathsInGrid = require("./uniquePathsInGrid");

test("return 0 if height or width of grid is 0", () => {
  expect(findNumOfUniquePathsInGrid(2, 0)).toBe(0);
  expect(findNumOfUniquePathsInGrid(0, 2)).toBe(0);
});

test("return 1 if height or width of grid is 1", () => {
  expect(findNumOfUniquePathsInGrid(2, 1)).toBe(1);
  expect(findNumOfUniquePathsInGrid(1, 2)).toBe(1);
});
