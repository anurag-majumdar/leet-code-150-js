/**
 * LC 79: Word Search
 *
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const m = board.length;
  const n = board[0].length;
  const W = word.length;
  const path = new Set();

  if (m === 1 && n === 1) {
    return board[0][0] === word;
  }

  const searchWord = (i, j, wordIndex) => {
    if (wordIndex === W) {
      return true;
    }

    if (
      i < 0 ||
      j < 0 ||
      i >= m ||
      j >= n ||
      board[i][j] !== word[wordIndex] ||
      path.has(`${i},${j}`)
    ) {
      return false;
    }

    // const tempChar = board[i][j];
    // board[i][j] = '#';

    path.add(`${i},${j}`);
    const found =
      searchWord(i + 1, j, wordIndex + 1) ||
      searchWord(i - 1, j, wordIndex + 1) ||
      searchWord(i, j + 1, wordIndex + 1) ||
      searchWord(i, j - 1, wordIndex + 1);
    path.delete(`${i},${j}`);
    // board[i][j] = tempChar;
    return found;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (searchWord(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

module.exports = exist;
