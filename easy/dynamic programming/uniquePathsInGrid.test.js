const findNumOfUniquePathsInGrid = require("./uniquePathsInGrid");

test("return 0 if height or width of grid is 0", () => {
  expect(findNumOfUniquePathsInGrid(2, 0)).toBe(0);
  expect(findNumOfUniquePathsInGrid(0, 2)).toBe(0);
});

test("return 1 if height or width of grid is 1", () => {
  expect(findNumOfUniquePathsInGrid(2, 1)).toBe(1);
  expect(findNumOfUniquePathsInGrid(1, 2)).toBe(1);
});

test("return 2 if grid is 2x2", () => {
  expect(findNumOfUniquePathsInGrid(2, 2)).toBe(2);
});

test("return 3 if grid is 2x3", () => {
  expect(findNumOfUniquePathsInGrid(2, 3)).toBe(3);
  expect(findNumOfUniquePathsInGrid(3, 2)).toBe(3);
});

test("return 6 if grid is 3x3", () => {
  expect(findNumOfUniquePathsInGrid(3, 3)).toBe(6);
});

test("return 10 if grid is 3x4", () => {
  expect(findNumOfUniquePathsInGrid(4, 3)).toBe(10);
});
