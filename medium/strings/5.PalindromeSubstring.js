function findLongestPalindromeSubstring(input) {
  if (input.length < 2) return input;
  let longestPalindrome = input[0];
  for (let i = 0; i < input.length; ) {
    let index = i;
    let mirroredIndex = i + 1;
    let palindrome = "";

    if (input[i] === input[i + 1] && input[i] === input[i + 2]) {
      palindrome += input[i] + input[i] + input[i];
      mirroredIndex = i + 3;
      while (input[index] === input[mirroredIndex]) {
        palindrome += input[index];
        mirroredIndex++;
      }
      index = i - 1;
    }

    if (input[i] === input[i + 2] && input[i] !== input[i + 1]) {
      palindrome += input[i] + input[i + 1] + input[i];
      index = i - 1;
      mirroredIndex = i + 3;
    }

    while (
      input[index] === input[mirroredIndex] &&
      index >= 0 &&
      mirroredIndex < input.length
    ) {
      const letter = input[index];
      palindrome = letter + palindrome + letter;
      index--;
      mirroredIndex++;
    }

    if (palindrome.length > longestPalindrome.length) {
      longestPalindrome = palindrome;
    }

    i = mirroredIndex;
  }
  return longestPalindrome;
}

module.exports = findLongestPalindromeSubstring;
