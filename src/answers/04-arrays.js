/**
 * Introduction to Javascript: Arrays
 *
 * Here is a collection of simple assignments for the purpose of learning some
 * of Javascript's built-in functions on arrays.
 * - forEach, map, filter, reduce, find
 */

function double(xs) {
  let result = [];
  for (let i = 0; i < xs.length; i++) {
    result.push(xs[i] * 2);
  }
  return result;
}

function sum(xs) {
  let result = 0;
  for (let i = 0; i < xs.length; i++) {
    result += xs[i];
  }
  return result;
}

function onlyOdd(xs) {
  let result = [];
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] % 2 === 1) result.push(xs[i]);
  }
  return result;
}

function removeEmpty(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != null) result.push(array[i]);
  }
  return result;
}

function reverse(array) {
  return array.reverse();
}

function head(array) {
  return array[0];
}

function last(array) {
  return array[array.length - 1];
}

function tail(array) {
  let result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

function init(array) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    result.push(array[i]);
  }
  return result;
}

module.exports = {
  double,
  sum,
  onlyOdd,
  removeEmpty,
  reverse,
  head,
  last,
  tail,
  init
};
