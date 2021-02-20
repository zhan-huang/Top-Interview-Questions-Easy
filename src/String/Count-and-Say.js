/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var res = '1';
  for (var i = 1; i < n; i++) {
    var arr = res.split('');
    // [{ digit, count }]
    var groups = [];
    for (var j = 0; j < arr.length; j++) {
      if (j === 0 || arr[j] !== arr[j - 1]) {
        groups.push({
          digit: arr[j],
          count: 1
        });
      } else {
        groups[groups.length - 1].count++;
      }
    }
    res = '';
    for (var k = 0; k < groups.length; k++) {
      var obj = groups[k];
      res += obj.count + obj.digit;
    }
  }
  return res;
};
