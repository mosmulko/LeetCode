function isValid(string) {
  const parenthesesPairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  if (parenthesesPairs[string[0]] === string[1]) return true;
  return false;
}

module.exports = isValid;
