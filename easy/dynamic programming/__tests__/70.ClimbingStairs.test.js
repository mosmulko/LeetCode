const climbStairs = require("../70.climbingStairs");

test("returns n waysToClimb for n steps if n < 4", () => {
  expect(climbStairs(1)).toBe(1);
  expect(climbStairs(2)).toBe(2);
  expect(climbStairs(3)).toBe(3);
});

test("returns 5 waysToClimb for n=4", () => {
  expect(climbStairs(4)).toBe(5);
});

test("returns 8 waysToClimb for n=5", () => {
  expect(climbStairs(5)).toBe(8);
});

test("returns 13 waysToClimb for n=6", () => {
  expect(climbStairs(6)).toBe(13);
});

test("returns 10946 waysToClimb for n=20", () => {
  expect(climbStairs(20)).toBe(10946);
});
