/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const sortedNums = nums.sort(function(a, b) {
    return a - b;
  });
  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i - 1]) {
      return true;
    }
  }
  return false;
};
