// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Memory O(1) & no shifting indexes

function rotateArray(nums, k) {
  if (k === 0 || nums.length === 1) return nums;
  reversePartOfArray(nums, 0);
  reversePartOfArray(nums, 0, k);
  reversePartOfArray(nums, k);
  return nums;
}

function reversePartOfArray(nums, firstToRotateIndex, loopEndIndex) {
  let loopEnd, lastIndex;
  if (loopEndIndex) {
    loopEnd = loopEndIndex / 2;
    lastIndex = loopEndIndex - 1;
  } else {
    loopEnd =
      firstToRotateIndex > 0
        ? (nums.length - firstToRotateIndex) / 2
        : nums.length / 2;
    lastIndex = nums.length - 1;
  }
  for (let i = firstToRotateIndex, j = 0; j < loopEnd; i++, j++) {
    const currentNum = nums[i];
    const indexOfOppositeNum = lastIndex - j;
    nums[i] = nums[indexOfOppositeNum];
    nums[indexOfOppositeNum] = currentNum;
  }
}

module.exports = rotateArray;
