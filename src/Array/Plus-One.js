/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  let needsIn = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1 || needsIn) {
      digits[i]++;
      if (digits[i] === 10) {
        digits[i] = 0;
        needsIn = true;
        if (i === 0) {
          digits.unshift(1);
          break;
        }
      } else {
        needsIn = false;
      }
    } else {
      needsIn = false;
    }
  }
  return digits;
};
