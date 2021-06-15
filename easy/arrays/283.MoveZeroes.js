function moveZeroes(nums) {
  let nextIndexToFill = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[++nextIndexToFill] = nums[i];
    }
    if (i !== nextIndexToFill) {
      nums[i] = 0;
    }
  }
  console.log(nums);
  return nums;
}

module.exports = moveZeroes;
