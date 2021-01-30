/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const sign = x < 0 ? '-' : '+';
  const numberArr = (x + '').split('');
  const numberStr = numberArr.reverse().join('');
  const number = parseInt(sign + numberStr);
  return number < -Math.pow(2, 31) || number > Math.pow(2, 31) - 1 ? 0 : number;
};
