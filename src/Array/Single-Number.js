/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(i, 1);
        nums.splice(j - 1, 1);
        j--;
        i--;
        break;
      }
    }
  }
  return nums[0];
};
