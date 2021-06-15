function plusOne(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 9) {
      nums[i]++;
      return nums;
    }
    nums[i] = 0;
    if (i === 0) return [1, ...nums];
  }
}

module.exports = plusOne;
