function findLongestPalindromeSubstring(input) {
  if (input.length < 2) return input;
  let longestPalindrome = input[0];
  for (let i = 0; i < input.length; ) {
    let current = i;
    let next = i + 1;
    let palindrome = "";

    if (input[i] === input[i + 2]) {
      palindrome += input[i] + input[i + 1] + input[i];
      next = i + 3;
      if (input[i] === input[i + 1]) {
        while (input[current] === input[next]) {
          palindrome += input[current];
          next++;
        }
      }
      current = i - 1;
    }

    while (
      input[current] === input[next] &&
      current >= 0 &&
      next < input.length
    ) {
      const letter = input[current];
      palindrome = letter + palindrome + letter;
      current--;
      next++;
    }

    if (palindrome.length > longestPalindrome.length) {
      longestPalindrome = palindrome;
    }

    i = next;
  }
  return longestPalindrome;
}

module.exports = findLongestPalindromeSubstring;
