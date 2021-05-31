const isValid = require("./20.ValidParentheses");

test("checks if parentheses is closed with only 2 characters of same pair", () => {
  expect(isValid("()")).toBeTruthy();
  expect(isValid("[]")).toBeTruthy();
  expect(isValid("{}")).toBeTruthy();
});
