function findNumOfUniquePathsInGrid(height, width) {
  const shorter = height >= width ? width : height;
  if (shorter < 2) return shorter;
}

module.exports = findNumOfUniquePathsInGrid;
