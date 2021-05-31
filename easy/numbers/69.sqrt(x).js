// Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

function sqrt(x) {
  if (x < 2) return x;
  let upperRange = x;
  let squareRoot = divideNumByTwoAndFloorIt(x);
  while (pow(squareRoot) !== x) {
    if (pow(squareRoot) > x) {
      upperRange = squareRoot;
      squareRoot = divideNumByTwoAndFloorIt(squareRoot);
    } else {
      if (pow(squareRoot + 1) > x) break;
      const rangeDifference = upperRange - squareRoot;
      squareRoot += divideNumByTwoAndFloorIt(rangeDifference);
    }
  }
  return squareRoot;
}

function pow(num) {
  return num * num;
}

function divideNumByTwoAndFloorIt(num) {
  return Math.floor(num / 2);
}

module.exports = sqrt;
