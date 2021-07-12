const convertRomanToInteger = require("../13.RomanToInteger");

test("returns correct conversion if there is only 1 symbol in the string", () => {
  expect(convertRomanToInteger("I")).toBe(1);
  expect(convertRomanToInteger("V")).toBe(5);
  expect(convertRomanToInteger("X")).toBe(10);
  expect(convertRomanToInteger("L")).toBe(50);
  expect(convertRomanToInteger("C")).toBe(100);
  expect(convertRomanToInteger("D")).toBe(500);
  expect(convertRomanToInteger("M")).toBe(1000);
});
