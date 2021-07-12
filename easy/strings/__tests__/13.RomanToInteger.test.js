const convertRomanToInteger = require("../13.RomanToInteger");

test("returns correct conversion if there are more symbols, but no subtraction", () => {
  expect(convertRomanToInteger("III")).toBe(3);
  expect(convertRomanToInteger("VII")).toBe(7);
  expect(convertRomanToInteger("XV")).toBe(15);
  expect(convertRomanToInteger("CL")).toBe(150);
});

test("returns correct conversion if there is a subtraction", () => {
  expect(convertRomanToInteger("IV")).toBe(4);
  expect(convertRomanToInteger("IX")).toBe(9);
  expect(convertRomanToInteger("XV")).toBe(15);
  expect(convertRomanToInteger("MCMXCIV")).toBe(1994);
});
