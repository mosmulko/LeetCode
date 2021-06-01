const climbingStairs = require("./70.ClimbingStairs");

test("returns n waysToClimb for n steps if n < 4", () => {
  expect(climbingStairs(1)).toBe(1);
  expect(climbingStairs(2)).toBe(2);
  expect(climbingStairs(3)).toBe(3);
});

test("returns 5 waysToClimb for n=4", () => {
  expect(climbingStairs(4)).toBe(5);
});
