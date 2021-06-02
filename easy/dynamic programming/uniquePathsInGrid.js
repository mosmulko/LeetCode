function findNumOfUniquePathsInGrid(height, width) {
  const shorterSide = height >= width ? width : height;
  if (shorterSide < 2) return shorterSide;
  return (
    findNumOfUniquePathsInGrid(height - 1, width) +
    findNumOfUniquePathsInGrid(height, width - 1)
  );
}

module.exports = findNumOfUniquePathsInGrid;
