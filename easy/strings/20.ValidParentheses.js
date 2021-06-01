function isValid(string) {
  if (string.length % 2 === 1) return false;
  const matchingSetsOfParentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stackOfBrackets = [];
  for (let i = 0; i < string.length; i++) {
    if (matchingSetsOfParentheses[string[i]]) {
      stackOfBrackets.push(string[i]);
    } else {
      const lastBracketInStack = stackOfBrackets.pop();
      if (matchingSetsOfParentheses[lastBracketInStack] !== string[i]) {
        return false;
      }
    }
  }
  return isEmpty(stackOfBrackets) ? true : false;
}

function isEmpty(array) {
  return array.length === 0;
}

module.exports = isValid;
