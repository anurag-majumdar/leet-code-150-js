const scoreOfString = require("../score-string");

describe('LC 3110: Score of a String', () => {
  it('Case 1: "hello"', async () => {
    const input = "hello";
    const expectedOutput = 13;
    const actualOutput = scoreOfString(input);
    expect(actualOutput).toBe(expectedOutput);
  });

  
  it('Case 2: "zaz"', async () => {
    const input = "zaz";
    const expectedOutput = 50;
    const actualOutput = scoreOfString(input);
    expect(actualOutput).toBe(expectedOutput);
  });

});
