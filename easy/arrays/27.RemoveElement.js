function removeElement(nums, value) {
  let indexToFill;
  for (let i = 0; i < nums.length; i++) {
    if (indexToFill === undefined && nums[i] === value) {
      indexToFill = i;
    }
    if (indexToFill !== undefined) {
      if (nums[i] !== value) {
        nums[indexToFill] = nums[i];
        indexToFill++;
      }
      nums[i] = null;
      if (i === nums.length - 1) return indexToFill;
    }
  }
  return nums.length;
}

module.exports = removeElement;
