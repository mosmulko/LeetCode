function sumAllNumsUpToN(n) {
  if (n < 2) return n;
  return n + sumAllNumsUpToN(n - 1);
}

module.exports = sumAllNumsUpToN;
