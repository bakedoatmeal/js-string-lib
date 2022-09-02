const strLib = require('../src/index.js')

test('capitalize returns string with first char', () => {
  expect(strLib.capitalize('hello world')).toEqual('Hello world')
})

test('allCaps returns string with all chars uppercase', () => {
  expect(strLib.allCaps('foo bar')).toEqual('FOO BAR')
})

test('capitalizeWords capitalizes the first character of each word of given string', () => {
  expect(strLib.capitalizeWords('do all the things')).toEqual('Do All The Things')
})

test('removeExtraSpaces removes all spaces from a string', () => {
  expect(strLib.removeExtraSpaces('   Hello    world!   ')).toEqual('Hello world!')
})

test('kebobCase returns string in kebob-case', () => {
  expect(strLib.kebobCase(' Hello world ')).toEqual('hello-world')
})

test('snakeCase returns string in snake_case', () => {
  expect(strLib.snakeCase(' What  the heck ')).toEqual('what_the_heck')
})

test('camelCase returns string in camelCase', () => {
  expect(strLib.camelCase('Camel Case')).toEqual('camelCase')
})

test('shift returns string with the first char shifted to the end', () => {
  expect(strLib.shift('Hello World')).toEqual('ello WorldH')
})

test('makeHashTag returns string array with hash tags from the three longest words', () => {
  expect(strLib.makeHashTag('Amazing bongo drums for sale')).toEqual(['#Amazing', '#Bongo', '#Drums'])
})

test('isEmpty returns true if given string is empty or contains only whitespace', () => {
  expect(strLib.isEmpty('        ')).toBe(true)
})

test('isEmpty returns false if given string is not empty or does not contain only whitespace', () => {
  expect(strLib.isEmpty('    hello    ')).toBe(false)
})