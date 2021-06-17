const rotateMatrix = require("./48.RotateImage");

const twoByTwoMatrix = [
  [1, 2],
  [3, 4],
];
const twoByTwoRotatedMatrix = [
  [3, 1],
  [4, 2],
];

// const threeByThreeMatrix = [[1,2,3],[4,5,6],[7,8,9]];
// const threeByRotatedThreeMatrix = [[7,4,1],[8,5,2],[9,6,3]];

// const fourByfourMatrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// const fourByfourRotatedMatrix = [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]];

test("returns unchanged array if no matrix is passed as argument", () => {
  expect(rotateMatrix([])).toEqual([]);
  expect(rotateMatrix([1])).toEqual([1]);
});

test("returns rotated matrix", () => {
  expect(rotateMatrix(twoByTwoMatrix)).toEqual(twoByTwoRotatedMatrix);
});
