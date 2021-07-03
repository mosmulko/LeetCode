function findLongestPalindromeSubstring(input) {
  if (input.length < 2) return input;
  let longestPalindrome = input[0];
  for (let i = 0; i < input.length; i++) {
    let index, mirroredIndex;
    let palindrome = "";
    if (input[i] === input[i + 1]) {
      index = i;
      mirroredIndex = i + 1;
    }
    if (input[i - 1] === input[i + 1]) {
      palindrome += input[i];
      index = i - 1;
      mirroredIndex = i + 1;
    }
    while (
      input[index] === input[mirroredIndex] &&
      index >= 0 &&
      mirroredIndex < input.length
    ) {
      palindrome = input[index] + palindrome + input[mirroredIndex];
      index--;
      mirroredIndex++;
    }
    longestPalindrome =
      palindrome.length > longestPalindrome.length
        ? palindrome
        : longestPalindrome;
  }
  return longestPalindrome;
}

module.exports = findLongestPalindromeSubstring;
