function removeElement(nums, value) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== value) {
      if (k !== i) {
        nums[k] = nums[i];
        nums[i] = null;
      }
      k++;
    } else {
      nums[i] = null;
    }
  }
  return k;
}

module.exports = removeElement;
