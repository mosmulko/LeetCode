function findLongestPalindromeSubstring(input) {
  if (input.length < 2) return input;
  const letters = {};
  const candidates = [];
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    if (!letters[letter]) {
      letters[letter] = [];
    } else {
      letters[letter].forEach((prevIndex) => candidates.push([prevIndex, i]));
    }
    letters[letter].push(i);
  }
  candidates.sort(compareLength);
  candidates.forEach((arr) => {
    let first = arr[0] + 1;
    let reflection = arr[1] - 1;
    const length = (reflection - first + 1) / 2;
    let isPalindrome = true;
    for (let i = first; i <= length; i++, reflection--) {
      isPalindrome = input[i] === input[reflection];
    }
    if (isPalindrome) console.log(input.substring(arr[0], arr[1] + 1));
  });
  return input[0];
}

function compareLength(a, b) {
  if (a[1] - a[0] > b[1] - b[0]) {
    return -1;
  }
  if (a[1] - a[0] < b[1] - b[0]) {
    return 1;
  }
  return 0;
}

module.exports = findLongestPalindromeSubstring;
