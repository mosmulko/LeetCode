function moveZeroes(nums) {
  let indexToFill;
  for (let i = 0; i < nums.length; i++) {
    if (indexToFill !== undefined && nums[i] !== 0) {
      nums[indexToFill] = nums[i];
      nums[i] = 0;
      indexToFill++;
    }
    if (indexToFill === undefined && nums[i] === 0) {
      indexToFill = i;
    }
  }
  return nums;
}

module.exports = moveZeroes;
