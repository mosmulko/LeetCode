const findLongestPalindromeSubstring = require("../5.PalindromeSubstring");

test("return 0 if no input", () => {
  expect(findLongestPalindromeSubstring("")).toBe(0);
});

test("return 1 if input has length 1 or only unique characters", () => {
  expect(findLongestPalindromeSubstring("p")).toBe(1);
  expect(findLongestPalindromeSubstring("bac")).toBe(1);
});
