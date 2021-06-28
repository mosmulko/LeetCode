const findLongestSubstring = require("../3.LongestSubstring");

test("return 0 if no input", () => {
  expect(findLongestSubstring("")).toBe(0);
});
