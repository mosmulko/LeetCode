function findLongestPalindromeSubstring(input) {
  if (input.length < 2) return input;
  let startIndexOfMaxPalindrome = 0;
  let lengthOfMaxPalindrome = 0;

  for (let i = 0; i < input.length; i++) {
    const lengthOfPalAtChar = expandAroundCenter(i, i);
    const lengthOfPalAfterChar = expandAroundCenter(i, i + 1);
    const maxLengthAtIndex = Math.max(lengthOfPalAtChar, lengthOfPalAfterChar);
    if (maxLengthAtIndex > lengthOfMaxPalindrome) {
      lengthOfMaxPalindrome = maxLengthAtIndex;
      startIndexOfMaxPalindrome = i - Math.floor((maxLengthAtIndex - 1) / 2);
    }
  }

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < input.length && input[left] === input[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  return input.substring(startIndexOfMaxPalindrome, lengthOfMaxPalindrome);
}

module.exports = findLongestPalindromeSubstring;
