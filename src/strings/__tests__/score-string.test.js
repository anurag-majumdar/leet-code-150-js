const scoreOfString = require("../score-string");

describe('score of a string', () => {
  it('Test with "hello"', async () => {
    const input = "hello";
    const expectedOutput = 13;
    const actualOutput = scoreOfString(input);
    expect(actualOutput).toBe(expectedOutput);
  });

  
  it('Test with "zaz"', async () => {
    const input = "zaz";
    const expectedOutput = 50;
    const actualOutput = scoreOfString(input);
    expect(actualOutput).toBe(expectedOutput);
  });

});
