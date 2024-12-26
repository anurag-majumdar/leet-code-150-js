const containsDuplicate = require('../contains-duplicate-1');

describe('contains-duplicate-1', () => {
  it('Test for duplicate in [7, 5, 5, 23, 1]', () => {
    const input = [7, 5, 5, 23, 1];
    const result = containsDuplicate(input);
    expect(result).toBe(true);
  });
});
