// return the length of the longest substring without any repeated characters

function findLongestSubstring(input) {
  if (!input) return 0;
  if (input.length === 1) return 1;
  const uniqueLetters = new Set();
  let substringLength = 0;
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    if (uniqueLetters.has(letter)) {
      substringLength = Math.max(substringLength, uniqueLetters.size);
      uniqueLetters.clear();
    }
    uniqueLetters.add(letter);
  }
  return Math.max(substringLength, uniqueLetters.size);
}

module.exports = findLongestSubstring;
