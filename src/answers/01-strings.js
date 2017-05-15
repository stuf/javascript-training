// Model answers for `01-strings`

function concatenateStrings(string1, string2) {
  return string1 + string2;
}

//

function getStringLength(text) {
  return text.length;
}

//

function getFirstChar(text) {
  return text.charAt(0);
}

//

function removeFirstOccurrence(search, text) {
  return text.replace(search, '');
}

//

function removeAngleBrackets(text) {
  return text.replace('<', '')
             .replace('>', '');
}

//

function splitString(text) {
  return text.split(';');
}

//

function isString(maybeString) {
  return typeof maybeString === 'string';
}

//

function concatenateStringsWithLiteral(string1, string2) {
  return `${string1} - ${string2}`;
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
