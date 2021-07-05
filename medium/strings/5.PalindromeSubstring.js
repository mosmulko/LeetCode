function findLongestPalindromeSubstring(input) {
  if (input.length < 2) return input;
  let isPalindrome = true;
  for (let i = 0; i < input.length / 2; i++) {
    const reflection = input.length - 1 - i;
    if (input[i] !== input[reflection]) {
      isPalindrome = false;
    }
  }
  if (isPalindrome) return input;
  let longestPalindrome = input[0];
  let lengthOfMaxCandidate = input.length;
  let index = 0;
  while (
    index < input.length &&
    longestPalindrome.length < lengthOfMaxCandidate
  ) {
    let first = index;
    let second = index + 1;
    let third = index + 2;
    let palindrome = "";

    if (input[first] === input[third]) {
      const letter = input[first];
      palindrome += letter + input[second] + letter;
      second = third + 1;
      first -= 1;
    } else if (
      input[first] === input[second] &&
      input[first] !== input[third]
    ) {
      const letter = input[first];
      palindrome += letter + letter;
      second = third;
      first -= 1;
    }

    while (
      input[first] === input[second] &&
      first >= 0 &&
      second < input.length
    ) {
      const letter = input[first];
      palindrome = letter + palindrome + letter;
      first--;
      second++;
    }

    if (palindrome.length > longestPalindrome.length) {
      longestPalindrome = palindrome;
    }
    lengthOfMaxCandidate = (input.length - index) * 2 - 1;
    index++;
  }
  return longestPalindrome;
}

module.exports = findLongestPalindromeSubstring;
