const sumAllNumsUpToN = require("./SumUpToN");

test("sum of n < 2 is n", () => {
  expect(sumAllNumsUpToN(0)).toBe(0);
  expect(sumAllNumsUpToN(1)).toBe(1);
  expect(sumAllNumsUpToN(3)).not.toBe(3);
});
