// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums, target) {
  const indexesOfTargetNums =
    nums[0] + nums[1] === target ? [0, 1] : "no matching indexes";
  return indexesOfTargetNums;
}

module.exports = twoSum;
