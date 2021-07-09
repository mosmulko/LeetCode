function removeElement(nums, value) {
  let indexToFill;
  let remainingLength = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === value) {
      remainingLength--;
    }
    if (indexToFill === undefined && nums[i] === value) {
      indexToFill = i;
      nums[i] = null;
    } else if (indexToFill !== undefined) {
      if (nums[i] !== value) {
        nums[indexToFill] = nums[i];
        indexToFill++;
      }
      nums[i] = null;
    }
  }
  return remainingLength;
}

module.exports = removeElement;
