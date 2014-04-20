var assert = require('assert');
var statistic = require('../');

describe('Statistic', function () {
  it('mean', function () {
    var actual = statistic.mean([1, 1, 2, 3, 4]);
    var expected = 2.2;

    assert.equal(actual, expected);
  });

  it('median', function () {
    var actual = [
      [3, 3, 3, 3, 3, 100],
      [1, 1, 2, 3, 4, 4],
      [3, 5, 7, 9],
      [3, 3, 5, 9, 11]
    ];
    var expected = [
      3, 2.5, 6, 5
    ];

    assert.deepEqual(actual.map(statistic.median), expected);
  });

  it('mode', function () {
    var actual = [
      [1],
      [1, 3, 3, 10],
      [2, 2, 4, 4, 4, 5, 5],
      [0, 1, 0, 1, 0, 0],
      [1, 2, 3, 4]
    ];
    var expected = [
      null, 3, 4, 0, null
    ];

    assert.deepEqual(actual.map(statistic.mode), expected);
  });

  it('range', function () {
    var actual = [
      [3, 5, 9],
      [10, 3, 5],
      [1],
    ];
    var expected = [
      6, 7, 0
    ];

    assert.deepEqual(actual.map(statistic.range), expected);
  });

  it('variance', function () {
    var actual = statistic.variance([1, 2, 3, 8, 7]);
    var expected = 2.79; 

    assert.equal(actual, expected);
  });
});
