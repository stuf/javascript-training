const path = require('path');
const { expect } = require('chai');

const { run } = require('./common');
const T = require('../src/tasks/01-strings');

describe(path.basename(__filename), () => {
  it(T.concatenateStrings.name, () =>
    run([['foo', 'bar', 'foobar'],
         ['foo', '', 'foo'],
         ['', 'bar', 'bar']],
        ([val1, val2, result]) =>
          expect(T.concatenateStrings(val1, val2)).to.equal(result)));

  it(T.getStringLength.name, () =>
    run([['foobar', 6],
         ['toppestkeks', 11],
         ['lol', 3]],
         ([input, result]) =>
           expect(T.getStringLength(input)).to.equal(result)));

  it(T.getFirstChar.name, () =>
    run([['foobar', 'f'],
         ['bar', 'b'],
         ['topkek', 't']],
         ([input, result]) =>
           expect(T.getFirstChar(input)).to.equal(result)));

  it(T.removeFirstOccurrence.name, () =>
    run([['bar', 'foobar', 'foo'],
         ['topkek', 'topkek', ''],
         ['l', 'blol', 'bol']],
         ([search, string, result]) =>
           expect(T.removeFirstOccurrence(search, string)).to.equal(result)));

  it(T.removeAngleBrackets.name, () =>
    run([['<div>', 'div'],
         ['<br />', 'br /'],
         ['<h1>', 'h1']],
         ([input, result]) =>
           expect(T.removeAngleBrackets(input)).to.equal(result)));

  it(T.splitString.name, () =>
    run([['string;another;third', ['string', 'another', 'third']]],
        ([input, result]) =>
          expect(T.splitString(input)).to.eql(result)));

  it(T.isString.name, () =>
    run([['this is a string', true],
         ['this is also a string', true],
         [true, false],
         [420, false],
         [{ a: 1 }, false],
         [[1, 2, 3], false],
         [['string', 'array'], false]],
         ([input, result]) =>
           expect(T.isString(input)).to.equal(result)));

  it(T.concatenateStringsWithLiteral.name, () =>
    run([['foo', 'bar', 'foo - bar'],
         ['top', 'kek', 'top - kek']],
         ([input1, input2, result]) =>
           expect(T.concatenateStringsWithLiteral(input1, input2)).to.equal(result)));
});
