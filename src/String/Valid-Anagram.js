/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const tArr = t.split('');
  for (let i = 0; i < s.length; i++) {
    const index = tArr.indexOf(s[i]);
    if (index === -1) {
      return false;
    }
    tArr.splice(index, 1);
  }
  if (tArr.length) {
    return false;
  }
  return true;
};
