function climbingStairs(n) {
  if (n < 4) return n;
  return climbingStairs(n - 1) + climbingStairs(n - 2);
}

module.exports = climbingStairs;
