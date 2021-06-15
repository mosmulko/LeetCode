function plusOne(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 9) {
      nums[i]++;
      return nums;
    } else {
      nums[i] = 0;
    }
  }
}

module.exports = plusOne;
