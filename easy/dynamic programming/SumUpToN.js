function sumAllNumsUpToN(n) {
  const memoizedSums = {};
  function sumRecursive(n) {
    if (n < 2) return n;
    if (memoizedSums[n]) return memoizedSums[n];
    memoizedSums[n] = n + sumRecursive(n - 1);
    return memoizedSums[n];
  }
  return sumRecursive(n);
}

module.exports = sumAllNumsUpToN;
