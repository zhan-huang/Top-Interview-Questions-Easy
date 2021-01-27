/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    if (nums[i] === 0) {
      nums.push(nums[i]);
      nums.splice(i, 1);
      i--;
      size--;
    }
  }
  return nums;
};
