function isValid(string) {
  if (string.length % 2 === 1) return false;
  const parenthesesPairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let lastIndex = string.length - 1;
  let skippedPair = 0;
  for (let i = 0; i <= lastIndex; i++) {
    if (parenthesesPairs[string[i]] === string[i + 1]) {
      i++;
      skippedPair += 2;
    } else if (
      parenthesesPairs[string[i]] ===
      string[string.length - 1 - i + skippedPair]
    ) {
      lastIndex--;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isValid;
