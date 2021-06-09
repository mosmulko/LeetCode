// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      return [i, i + 1];
    }
  }
  return "no matching indexes";
}

module.exports = twoSum;
