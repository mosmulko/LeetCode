const findLongestSubstring = require("../3.LongestSubstring");

test("return 0 if no input", () => {
  expect(findLongestSubstring("")).toBe(0);
});

test("return 1 if input has length 1", () => {
  expect(findLongestSubstring("p")).toBe(1);
});

test("return string's length when it has all unique characters", () => {
  const uniqueLetters = "parody";
  const repeatedLetter = "parrot";
  expect(findLongestSubstring(uniqueLetters)).toBe(uniqueLetters.length);
  expect(findLongestSubstring(repeatedLetter)).not.toBe(repeatedLetter.length);
});

test("return length of longest substring, when substrings are seperate", () => {
  expect(findLongestSubstring("bbb")).toBe(1);
  expect(findLongestSubstring("abcabcbb")).toBe(3);
  expect(findLongestSubstring("pwwkew")).toBe(3);
});
