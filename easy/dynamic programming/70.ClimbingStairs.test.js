const climbingStairs = require("./70.ClimbingStairs");

test("returns n waysToClimb for n steps if n < 4", () => {
  expect(climbingStairs(1)).toBe(1);
  expect(climbingStairs(2)).toBe(2);
  expect(climbingStairs(3)).toBe(3);
});

test("returns 5 waysToClimb for n=4", () => {
  expect(climbingStairs(4)).toBe(5);
});

test("returns 8 waysToClimb for n=5", () => {
  expect(climbingStairs(5)).toBe(8);
});

test("returns 13 waysToClimb for n=6", () => {
  expect(climbingStairs(6)).toBe(13);
});

test("returns 10946 waysToClimb for n=20", () => {
  expect(climbingStairs(20)).toBe(10946);
});
