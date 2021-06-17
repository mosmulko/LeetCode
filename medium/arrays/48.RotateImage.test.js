const rotateMatrix = require("./48.RotateImage");

test("returns unchanged array if no matrix is passed as argument", () => {
  expect(rotateMatrix([])).toEqual([]);
  expect(rotateMatrix([1])).toEqual([1]);
});
