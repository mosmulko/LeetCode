function isValid(input) {
  if (input.length % 2 === 1) return false;
  const matchingSetsOfParentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stackOfBrackets = [];
  for (let i = 0; i < input.length; i++) {
    const bracket = input[i];
    if (matchingSetsOfParentheses[bracket]) {
      stackOfBrackets.push(bracket);
    } else {
      const lastBracketInStack = stackOfBrackets.pop();
      if (matchingSetsOfParentheses[lastBracketInStack] !== bracket) {
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
