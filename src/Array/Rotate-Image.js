/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var l = matrix.length;
  var cond1 = parseInt((l + 1) / 2);
  for (var i = 0; i < cond1; i++) {
    var cond2 = parseInt(l / 2);
    for (var j = 0; j < cond2; j++) {
      var temp = matrix[l - 1 - j][i];
      matrix[l - 1 - j][i] = matrix[l - 1 - i][l - j - 1];
      matrix[l - 1 - i][l - j - 1] = matrix[j][l - 1 - i];
      matrix[j][l - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};
