/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  const ps = s
    .replace(/\s/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '')
    .toLowerCase();
  for (let i = 0; i < parseInt(ps.length / 2); i++) {
    if (ps[i] !== ps[ps.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
