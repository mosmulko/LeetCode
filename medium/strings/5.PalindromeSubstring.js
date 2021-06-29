function findLongestPalindromeSubstring(input) {
  if (!input) return 0;
  if (input.length === 1) return 1;
  const uniqueLetters = new Set();
  let substringLength = 0;
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    if (!uniqueLetters.has(letter)) {
      uniqueLetters.add(letter);
    }
  }
  return uniqueLetters.size === input.length ? 1 : substringLength;
}

module.exports = findLongestPalindromeSubstring;
