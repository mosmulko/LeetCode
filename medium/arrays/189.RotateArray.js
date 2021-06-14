// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Memory O(1) & no shifting indexes

function rotateArray(nums, k) {
  if (k === 0 || nums.length === 1) return nums;
}

module.exports = rotateArray;
