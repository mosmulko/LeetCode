const isValid = require("../20.ValidParentheses");

test("checks if parentheses is closed with only 2 characters of same pair", () => {
  expect(isValid("()")).toBeTruthy();
  expect(isValid("[]")).toBeTruthy();
  expect(isValid("{}")).toBeTruthy();
});

test("checks if parentheses is closed with consecutive pairs", () => {
  expect(isValid("()[]")).toBeTruthy();
  expect(isValid("[]{}()")).toBeTruthy();
  expect(isValid("{}[)")).toBeFalsy();
});

test("checks if parentheses are valid when they are scoped within each other", () => {
  expect(isValid("([])")).toBeTruthy();
  expect(isValid("[{()}]")).toBeTruthy();
  expect(isValid("{[)}")).toBeFalsy();
});

test("checks if parentheses are valid when they are both scoped and consecutive", () => {
  expect(isValid("([(){}])")).toBeTruthy();
});

test("checks if function return false when there's an odd number of characters", () => {
  expect(isValid("[])")).toBeFalsy();
});

test("checks if function return false when brackets are inverted", () => {
  expect(isValid("][)(")).toBeFalsy();
  expect(isValid("]}{[")).toBeFalsy();
});

test("checks if parentheses are valid when they are both scoped and consecutive assymetrically", () => {
  expect(isValid("([(){[]}])")).toBeTruthy();
  expect(isValid("(([]){})")).toBeTruthy();
  expect(isValid("(([])[{}])")).toBeTruthy();
  expect(isValid("(([]))([{}])")).toBeTruthy();
  expect(isValid("{(([]))}([{}])")).toBeTruthy();
  expect(isValid("{(([]))}([}{])")).toBeFalsy();
});

test("checks if function return false when there are only opening brackets", () => {
  expect(isValid("((")).toBeFalsy();
  expect(isValid("[{{[")).toBeFalsy();
});

test("checks if function return false when therea re only closing brackets", () => {
  expect(isValid("))")).toBeFalsy();
  expect(isValid("]}}]")).toBeFalsy();
});
