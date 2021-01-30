/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    const numbers = board[i].filter(pos => pos !== '.');
    if (numbers.length !== new Set(numbers).size) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    const numbers = [];
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== '.') {
        numbers.push(board[j][i]);
      }
    }
    if (numbers.length !== new Set(numbers).size) {
      return false;
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const numbers = [];
      for (let k = 0 + i * 3; k < (i + 1) * 3; k++) {
        for (let l = 0 + j * 3; l < (j + 1) * 3; l++) {
          if (board[k][l] !== '.') {
            numbers.push(board[k][l]);
          }
        }
      }
      if (numbers.length !== new Set(numbers).size) {
        return false;
      }
    }
  }

  return true;
};
