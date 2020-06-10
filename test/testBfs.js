const assert = require('chai').assert;
const { bfs } = require('../src/graph');
const testSample = require('./testSample.json');

describe('bfs', () => {
  it('should return false for path from bb to jj for the testSample', () => {
    const actual = bfs(testSample, 'bb', 'jj');
    assert.deepStrictEqual(actual, false);
  });

  it('should return true for path from jj to aa for the testSample', () => {
    const actual = bfs(testSample, 'jj', 'aa');
    assert.deepStrictEqual(actual, true);
  });

  it('should return true for path from aa to hh for the testSample', () => {
    const actual = bfs(testSample, 'aa', 'hh');
    assert.deepStrictEqual(actual, true);
  });

  it('should return true for path from hh to ii for the testSample', () => {
    const actual = bfs(testSample, 'hh', 'ii');
    assert.deepStrictEqual(actual, true);
  });

  it('should return true for path from ii to ee for the testSample', () => {
    const actual = bfs(testSample, 'ii', 'ee');
    assert.deepStrictEqual(actual, true);
  });

  it('should return true for path from ee to mm for the testSample', () => {
    const actual = bfs(testSample, 'ee', 'mm');
    assert.deepStrictEqual(actual, true);
  });

  it('should return false for path from mm to jj for the testSample', () => {
    const actual = bfs(testSample, 'mm', 'jj');
    assert.deepStrictEqual(actual, false);
  });

  it('should return true for path from bb to bb for the testSample', () => {
    const actual = bfs(testSample, 'bb', 'bb');
    assert.deepStrictEqual(actual, true);
  });
});
