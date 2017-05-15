/**
 * Concatenate `string1` and `string2` into one string.
 *
 * @example
 *   input: ('top', 'kek')
 *   output: 'topkek'
 *
 * @param {string} string1 - The first string to concatenate
 * @param {string} string2 - The second string to concatenate
 * @returns {string}
 */
function concatenateStrings(string1, string2) {
  throw new Error('Not implemented');
}

/**
 * Return the given `text`'s length
 *
 * @example
 *   input: ('foobar')
 *   output: 6
 *
 * @param {string} text - The string to get the length from
 * @returns {number}
 */
function getStringLength(text) {
  throw new Error('Not implemented');
}

/**
 * Return the first character of the given `string`
 *
 * @example
 *   input: ('foobar')
 *   output: 'f'
 *
 * @param {string} text
 * @returns {string}
 */
function getFirstChar(text) {
  throw new Error('Not implemented');
}

/**
 * Return `text` with the first occurrence of `search`
 * replaced with `''`
 *
 * @example
 *   input: ('foo', 'foobar')
 *   output: 'bar'
 *
 * @param {string} search
 * @param {string} text
 * @returns {string}
 */
function removeFirstOccurrence(search, text) {
  throw new Error('Not implemented');
}

/**
 * Return `text` where the first instance of `<` and `>`
 * are replaced with `''`.
 * Hint: methods can be chained
 *
 * @param {string} text
 * @returns {string}
 */
function removeAngleBrackets(text) {
  throw new Error('Not implemented');
}

/**
 * Return the string as a list of strings split at every `;`.
 * Hint: no for-loops needed
 *
 * @example
 *   input: ('foo;bar;baz')
 *   output: ['foo', 'bar', 'baz']
 *
 * @param {string} text
 * @returns {string}
 */
function splitString(text) {
  throw new Error('Not implemented');
}

/**
 * Use JS' `typeof` operator to test whether or not `maybeString` is a string,
 * and return true if it is a string and false otherwise.
 *
 * @param {string} maybeString
 * @returns {boolean}
 */
function isString(maybeString) {
  throw new Error('Not implemented');
}

/**
 * Concatenate two strings using JavaScript's template literals so that
 * they are separated with ` - ` (note the spaces).
 * _Do not_ use the `+` operator.
 *
 * @see http://wesbos.com/javascript-template-strings/
 *
 * @example
 *  input: ('foo', 'bar')
 *  output: foo - bar
 *
 * @param {string} string1
 * @param {string} string2
 * @returns {string}
 */
function concatenateStringsWithLiteral(string1, string2) {
  throw new Error('Not implemented');
}

//

module.exports = {
  concatenateStrings,
  concatenateStringsWithLiteral,
  getStringLength,
  getFirstChar,
  removeFirstOccurrence,
  removeAngleBrackets,
  splitString,
  isString
};
