// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums, target) {
  const sumCandidates = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) continue;
    const difference = target - nums[i];
    if (sumCandidates[difference] !== undefined) {
      return [sumCandidates[difference], i];
    }
    sumCandidates[nums[i]] = i;
  }
  return "no matching indexes";
}

module.exports = twoSum;
