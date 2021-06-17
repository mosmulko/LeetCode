const sumAllNumsUpToN = require("../SumUpToN");

test("sum of n < 2 is n", () => {
  expect(sumAllNumsUpToN(0)).toBe(0);
  expect(sumAllNumsUpToN(1)).toBe(1);
  expect(sumAllNumsUpToN(3)).not.toBe(3);
});

test("sum of n=2 is 3", () => {
  expect(sumAllNumsUpToN(2)).toBe(3);
});

test("sum of n=3 is 6", () => {
  expect(sumAllNumsUpToN(3)).toBe(6);
});

test("sum of n=5 is 15", () => {
  expect(sumAllNumsUpToN(3)).toBe(6);
});
