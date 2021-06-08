function climbStairs(steps) {
  const memoizedWaysToClimb = {};
  function climbStairsMemoized(n) {
    if (n < 4) return n;
    if (!memoizedWaysToClimb[n]) {
      memoizedWaysToClimb[n] =
        climbStairsMemoized(n - 1) + climbStairsMemoized(n - 2);
    }
    return memoizedWaysToClimb[n];
  }
  return climbStairsMemoized(steps);
}

module.exports = climbStairs;
