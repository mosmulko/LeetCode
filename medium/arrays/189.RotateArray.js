// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Memory O(1) & no shifting indexes

function rotateArray(nums, k) {
  if (k === 0 || nums.length === 1) return nums;
  for (let i = 0; i < nums.length / 2; i++) {
    const currentNum = nums[i];
    const indexOfOppositeNum = nums.length - 1 - i;
    nums[i] = nums[indexOfOppositeNum];
    nums[indexOfOppositeNum] = currentNum;
  }
  return nums;
}

module.exports = rotateArray;
