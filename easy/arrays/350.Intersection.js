function findIntersection(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return [];
  const contentOfNums1 = {};
  for (let i = 0; i < nums1.length; i++) {
    contentOfNums1[nums1[i]]
      ? contentOfNums1[nums1[i]]++
      : (contentOfNums1[nums1[i]] = 1);
  }
  const intersection = [];
  for (let i = 0; i < nums2.length; i++) {
    if (contentOfNums1[nums2[i]]) {
      intersection.push(nums2[i]);
      contentOfNums1[nums2[i]]--;
    }
  }
  return intersection;
}

module.exports = findIntersection;
