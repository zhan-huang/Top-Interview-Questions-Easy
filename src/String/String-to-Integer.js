/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
  let res = parseInt(s);
  res = res || 0;
  const lowerBound = -Math.pow(2, 31);
  const upperBound = Math.pow(2, 31) - 1;
  res = res < lowerBound ? lowerBound : res;
  res = res > upperBound ? upperBound : res;
  return res;
};
