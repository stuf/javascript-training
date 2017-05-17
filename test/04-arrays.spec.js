const path = require('path');
const { expect } = require('chai');
const J = require('jsverify');

const { run } = require('./common');
const T = require('../src/tasks/04-arrays');

describe(path.basename(__filename), () => {
  it(T.double.name, () =>
    run([[[1, 2, 3], [2, 4, 6]],
         [[10, 10, 10], [20, 20, 20]]],
         ([input, result]) =>
           expect(T.double(input)).to.eql(result)));

  it(T.sum.name, () =>
    run([[[1, 2, 3], 6],
         [[10, 20, 30], 60],
         [[10, 10, 100], 120]],
         ([input, result]) =>
           expect(T.sum(input)).to.equal(result)));

  it(T.onlyOdd.name, () =>
    run([[[1, 2, 3, 4, 5], [1, 3, 5]],
         [[2, 4, 6], []]],
         ([input, result]) =>
           expect(T.onlyOdd(input)).to.eql(result)));

  it(T.reverse.name, () =>
    run([[[1, 2, 3], [3, 2, 1]],
         [[10, 10, 20], [20, 10, 10]]],
         ([input, result]) =>
           expect(T.reverse(input)).to.eql(result)));

  it(T.removeEmpty.name, () =>
    run([[[1, null, '', 2, 3, undefined], [1, '', 2, 3]]],
        ([input, result]) =>
          expect(T.removeEmpty(input)).to.eql(result)));

  it(T.head.name, () =>
    run([[[1, 2, 3, 4, 5], 1]],
        ([input, result]) =>
          expect(T.head(input)).to.equal(result)));

  it(T.last.name, () =>
    run([[[1, 2, 3, 4, 5], 5]],
        ([input, result]) =>
          expect(T.last(input)).to.equal(result)));

  it(T.tail.name, () =>
    run([[[1, 2, 3, 4, 5], [2, 3, 4, 5]]],
        ([input, result]) =>
          expect(T.tail(input)).to.eql(result)));

  it(T.init.name, () =>
    run([[[1, 2, 3, 4, 5], [1, 2, 3, 4]]],
        ([input, result]) =>
          expect(T.init(input)).to.eql(result)));
});
