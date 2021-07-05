function findLongestPalindromeSubstring(input) {
  if (input.length < 2) return input;
  let longestPalindrome = input[0];
  let i = 0;
  while (i < input.length) {
    let current = i;
    let next = i + 1;
    let palindrome = "";

    if (input[i - 1] === input[i + 1]) {
      const letter = input[i - 1];
      palindrome += letter + input[i] + letter;
      next = i + 2;
      current = i - 2;
    } else if (input[i] === input[i + 2]) {
      const letter = input[i];
      palindrome += letter + input[i + 1] + letter;
      next = i + 3;
      if (letter === input[i + 1]) {
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
    // console.log(input, "i", i, "next", next);
    // if (next - i > 1) {
    //   i = next - 1;
    // } else {
    //   i = next;
    // }
    i++;
  }
  return longestPalindrome;
}

module.exports = findLongestPalindromeSubstring;
