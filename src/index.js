// Makes the first char of a given str uppercase
function capitalize(str) {
  const split = str.split('');
  split[0] = split[0].toUpperCase();
  return split.join('');
}

console.log('Problem 1: Capitalize');
console.log(capitalize('the 1st char should be capitalized!'));
console.log('---------------------');

// Makes all chars uppercase
function allCaps(str) {
  return str.toUpperCase();
}

console.log('Problem 2: All caps');
console.log(allCaps('this should be in all caps!'));
console.log('---------------------');

// Makes first char of each word uppercase
function capitalizeWords(str) {
  const splitString = str.split(' ');
  const newString = splitString.map((word) => capitalize(word));
  return newString.join(' ');
}

console.log('Problem 3: Capitalize words');
console.log(capitalizeWords('these words should all be capitalized!'));
console.log('--------------------');

// Removes all spaces from the beginning and end of a String along
// with any extra spaces in the middle
function removeExtraSpaces(str) {
  const cleanString = str.trim();
  const stringArray = cleanString.split(' ').filter((value) => value !== '')
  return stringArray.join(' ')
}

console.log('Problem 4: Remove Extra Spaces');
console.log(removeExtraSpaces('       there    should    be no   extra  spaces'));
console.log('--------------------');

// Removes extra spaces and replaces spaces with the hyphen "-"
// and makes all characters lowercase
function kebobCase(str) {
  let kebob = str.toLowerCase();
  let chars = kebob.split('');
  chars = chars.filter((value) => {
    const code = value.charCodeAt(0);
    if (code === 32 || code === 45 || code >= 48 && code <= 57 || code >= 97 && code <= 122) {0
      return true
    }
  })
  kebob = chars.join('');
  kebob = removeExtraSpaces(kebob).split(' ').join('-');
  return kebob
}

console.log('Problem 5: Kebob case');
console.log(kebobCase('       this SHOULD BE!!! in kebob case :D '));
console.log('--------------------');

// Removes extra space and replaces spaces with an underscore "_"
// and makes all characters lowercase
function snakeCase(str) {
  let snake = str.toLowerCase();
  let chars = snake.split('');
  chars = chars.filter((value) => {
    const code = value.charCodeAt(0);
    if (code === 32 || code === 45 || code >= 48 && code <= 57 || code >= 95 && code <= 122) {0
      return true
    }
  })
  snake = chars.join('');
  snake = removeExtraSpaces(snake).split(' ').join('_');
  return snake
}

console.log('Problem 6: Snake case');
console.log(snakeCase('       this SHOULD BE!!! in snake case :D '));
console.log('--------------------');

// Lowercase the first char of the first word
// remove all spaces and uppercase the first char of all words
function camelCase(str) {
  let camel = str.split(' ');
  camel[0] = camel[0].toLowerCase()
  camel = camel.map((word, index) => index === 0 ? word : capitalize(word));
  return camel.join('')
}

console.log('Problem 7: Camel case');
console.log(camelCase('this should be in camel case'));
console.log('--------------------');

// Shift first char of a string and move it to the end of a string
function shift(str) {
  const shifted = str.slice(1)
  return `${shifted}${str[0]}`
}

console.log('Problem 8: Shift');
console.log(shift('Hello World'));
console.log('--------------------');

// Convert given string to hash tags
function makeHashTag(str) {
  let split = str.split(' ');
  split.sort((a, b) => b.length - a.length)
  split = split.map((value) => `#${capitalize(value)}`)
  return split.slice(0, 3)
}

console.log('Problem 9: Hash tag');
console.log(makeHashTag('Amazing bongo drums for sale'));
console.log('--------------------');

// returns true if the given string is empty or contains only whitespace
function isEmpty(str) {
  const allowed = [' ', '\n', '\r', '\t']
  for (let i = 0; i < str.length; i += 1) {
    if (!allowed.includes(str[i])){ 
      console.log(str[i])
      return false
    }
  }
  return true
}

console.log('Problem 10: is empty');
console.log(isEmpty('           '));
console.log('--------------------');

module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kebobCase = kebobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift
module.exports.makeHashTag = makeHashTag
module.exports.isEmpty = isEmpty