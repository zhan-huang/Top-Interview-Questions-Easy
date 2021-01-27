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

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
