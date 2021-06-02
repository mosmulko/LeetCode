function memoizeSumsUpToN() {
  const memoizedSums = {};
  return function RecursiveSum(n) {
    if (n < 2) return n;
    if (memoizedSums[n]) {
      return memoizedSums[n];
    }
    memoizedSums[n] = n + RecursiveSum(n - 1);
    return memoizedSums[n];
  };
}

const sumAllNumsUpToN = memoizeSumsUpToN();

module.exports = sumAllNumsUpToN;
