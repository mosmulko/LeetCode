const findLongestPalindromeSubstring = require("../5.PalindromeSubstring");

test("return 0 if no input", () => {
  expect(findLongestPalindromeSubstring("")).toBe("");
});

test("return first letter if input has length 1 or only unique characters", () => {
  expect(findLongestPalindromeSubstring("p")).toBe("p");
  expect(findLongestPalindromeSubstring("bac")).toBe("b");
});

test("return longest palindrome if palindrome has equal length", () => {
  expect(findLongestPalindromeSubstring("paap")).toBe("paap");
  expect(findLongestPalindromeSubstring("pppp")).toBe("pppp");
});

test("return longest palindrome if palindrome has odd length", () => {
  expect(findLongestPalindromeSubstring("pap")).toBe("pap");
  expect(findLongestPalindromeSubstring("ccc")).toBe("ccc");
  expect(findLongestPalindromeSubstring("bcccccd")).toBe("ccccc");
});

test("return length of longest palindrome substring", () => {
  expect(findLongestPalindromeSubstring("abcabcbb")).toBe("bcb");
  expect(findLongestPalindromeSubstring("pwwkekw")).toBe("wkekw");
  expect(findLongestPalindromeSubstring("babcgdedgb")).toBe("gdedg");
  expect(findLongestPalindromeSubstring("abacab")).toBe("bacab");
  expect(findLongestPalindromeSubstring("babgdbdgdedgdb")).toBe("bdgdedgdb");
  expect(findLongestPalindromeSubstring("bananas")).toBe("anana");
  expect(findLongestPalindromeSubstring("ababababababa")).toBe("ababababababa");
});
