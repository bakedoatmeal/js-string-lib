// Makes the first char of a given str uppercase
function capitalize(str: string) {
  const split = str.split('');
  split[0] = split[0].toUpperCase();
  return split.join('');
}

console.log('Problem 1: Capitalize');
console.log(capitalize('the 1st char should be capitalized!'));
console.log('---------------------');

// Makes all chars uppercase
function allCaps(str: string) {
  return str.toUpperCase();
}

console.log('Problem 2: All caps');
console.log(allCaps('this should be in all caps!'));
console.log('---------------------');

// Makes first char of each word uppercase
function capitalizeWords(str: string) {
  const splitString = str.split(' ');
  const newString = splitString.map((word) => capitalize(word));
  return newString.join(' ');
}

console.log('Problem 3: Capitalize words');
console.log(capitalizeWords('these words should all be capitalized!'));
console.log('--------------------');

// Removes all spaces from the beginning and end of a String along
// with any extra spaces in the middle
function removeExtraSpaces(str: string) {
  const cleanString = str.trim();
  const stringArray = cleanString.split(' ').filter((value) => value !== '')
  return stringArray.join(' ')
}

console.log('Problem 4: Remove Extra Spaces');
console.log(removeExtraSpaces('       there    should    be no   extra  spaces'));
console.log('--------------------');

// Removes extra spaces and replaces spaces with the hyphen "-"
// and makes all characters lowercase
function kebobCase(str: string) {
  
}