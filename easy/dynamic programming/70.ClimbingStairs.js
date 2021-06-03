function climbingStairs(n) {
  if (n < 4) return n;
  const steps = {
    one: n,
    two: 0,
  };
  let waysToClimb = 1;
  while (steps.one > 1) {
    steps.one -= 2;
    steps.two++;
    if (steps.one === 0) {
      waysToClimb++;
    } else {
      waysToClimb += steps.one + steps.two;
    }
  }
  return waysToClimb;
}

module.exports = climbingStairs;
