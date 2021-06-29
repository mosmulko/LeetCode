const findLongestPalindromeSubstring = require("../5.PalindromeSubstring");

test("return 0 if no input", () => {
  expect(findLongestPalindromeSubstring("")).toBe("");
});

test("return 1 if input has length 1 or only unique characters", () => {
  expect(findLongestPalindromeSubstring("p")).toBe("p");
  expect(findLongestPalindromeSubstring("bac")).toBe("b");
});

test("return length of longest palindrome substring", () => {
  expect(findLongestPalindromeSubstring("abcabcbb")).toBe("bcb");
  expect(findLongestPalindromeSubstring("pwwkekw")).toBe("wkekw");
  expect(findLongestPalindromeSubstring("babcgdedgb")).toBe("gdedg");
});
