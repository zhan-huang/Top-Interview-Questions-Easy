/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  const sortedStrs = strs.sort((s1, s2) => s2.length - s1.length);
  const shortestStr = sortedStrs.pop();
  let common = '';
  if (shortestStr) {
    let same = true;
    for (let i = 0; i < shortestStr.length; i++) {
      var c = shortestStr[i];
      for (let j = 0; j < sortedStrs.length; j++) {
        const str = sortedStrs[j];
        if (str[i] !== c) {
          same = false;
          break;
        }
        if (j == str.length - 1) {
          sortedStrs.shift();
        }
      }
      if (same) {
        common += c;
      } else {
        break;
      }
    }
  }
  return common;
};
