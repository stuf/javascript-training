/**
 * Tasks related to handling arrays
 *
 * Note: `for`-loops are okay here!
 */

/**
 * Multiply each item in the list by two
 *
 * @example
 *   input: ([1, 2, 3])
 *   output: [2, 4, 6]
 *
 * @param {number[]} array
 * @returns {number[]}
 */
function double(array) {
  throw new Error('Not implemented');
}

/**
 * Calculate the sum of the array
 *
 * @example
 *   input: ([1, 2, 3])
 *   output: 6
 *
 * @param {number[]} array
 * @returns {number}
 */
function sum(array) {
  throw new Error('Not implemented');
}

/**
 * Remove all even numbers from the array
 *
 * @example
 *   input: ([1, 2, 3, 4, 5])
 *   output: [1, 3, 5]
 *
 * @param {number[]} array
 * @returns {number}
 */
function onlyOdd(array) {
  throw new Error('Not implemented');
}

/**
 * Remove all items from the list that equal `null` or `undefined`
 *
 * @example
 *   input: ([1, 2, null, 3, '', 4, undefined, 5])
 *   output: [1, 2, 3, '', 4, 5]
 *
 * @param {number[]} array
 * @returns {number[]}
 */
function removeEmpty(array) {
  throw new Error('Not implemented');
}

/**
 * Reverse the given array
 * Hint: there might be an array method for this
 *
 * @example
 *   input: ([1, 2, 3, 4])
 *   output: [4, 3, 2, 1]
 *
 * @param {number[]} array
 */
function reverse(array) {
  throw new Error('Not implemented');
}

/**
 * Return the first element of the list
 *
 * @example
 *   input: ([1, 2, 3, 4, 5])
 *   output: 1
 *
 * @param {number[]} array
 * @returns {number}
 */
function head(array) {
  throw new Error('Not implemented');
}

/**
 * Return the last element of the list
 *
 * @example
 *   input: ([1, 2, 3, 4, 5])
 *   output: 5
 *
 * @param {number[]} array
 * @returns {number}
 */
function last(array) {
  throw new Error('Not implemented');
}

/**
 * Return the tail of the array, e.g. all elements but the first
 *
 * @example
 *   input: ([1, 2, 3, 4, 5])
 *   output: [2, 3, 4, 5]
 *
 * @param {number[]} array
 * @returns {number[]}
 */
function tail(array) {
  throw new Error('Not implemented');
}

/**
 * Return the init of the array, e.g. all elements but the last
 *
 * @example
 *   input: ([1, 2, 3, 4, 5])
 *   output: [1, 2, 3, 4]
 *
 * @param {number[]} array
 * @returns {number[]}
 */
function init(array) {
  throw new Error('Not implemented');
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
