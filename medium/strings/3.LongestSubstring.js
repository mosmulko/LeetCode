// return the length of the longest substring without any repeated characters

function findLongestSubstring(input) {
  if (!input) return 0;
  if (input.length === 1) return 1;
  const uniqueLetters = {};
  let substringLength = 0;
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    if (!uniqueLetters[letter]) {
      substringLength++;
      uniqueLetters[letter] = true;
    }
  }
  return substringLength;
}

module.exports = findLongestSubstring;
