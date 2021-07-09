function removeElement(nums, value) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== value) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(nums);
  return k;
}

// function removeElement(nums, value) {
//   let indexToFill = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== value) {
//       nums[indexToFill] = nums[i];
//       indexToFill++;
//     }
//     if (indexToFill > 0) {
//       nums[i] = null;
//     }
//   }
//   console.log(nums);
//   return indexToFill;
// }

module.exports = removeElement;
