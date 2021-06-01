function isValid(string) {
  if (string.length % 2 === 1) return false;
  const matchingSetsOfParentheses = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const openingParentheses = [];
  for (let i = 0; i < string.length; i++) {
    if (!matchingSetsOfParentheses[string[i]]) {
      openingParentheses.push(string[i]);
    } else {
      if (
        matchingSetsOfParentheses[string[i]] !==
        openingParentheses[openingParentheses.length - 1]
      ) {
        return false;
      } else {
        openingParentheses.pop();
      }
    }
  }
  return openingParentheses.length === 0 ? true : false;
}

module.exports = isValid;
