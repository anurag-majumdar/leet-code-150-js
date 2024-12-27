const exist = require('../word-search');

describe('LC 79: Word Search', () => {
  it(`Case 1: board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ]
      word = 'ABCCED'`, () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'ABCCED';
    const expectedOutput = true;

    const actualOutput = exist(board, word);
    expect(actualOutput).toBe(expectedOutput);
  });
});
