function findNumOfPathsMemoized() {
  const memoizedPaths = {};
  return function findPathsRecursively(height, width) {
    const shorterSide = height >= width ? width : height;
    if (shorterSide < 2) return shorterSide;
    let grid = `${height}x${width}`;
    if (memoizedPaths[grid]) return memoizedPaths[grid];
    memoizedPaths[grid] =
      findPathsRecursively(height - 1, width) +
      findPathsRecursively(height, width - 1);
    return memoizedPaths[grid];
  };
}

const findNumOfUniquePathsInGrid = findNumOfPathsMemoized();

module.exports = findNumOfUniquePathsInGrid;
