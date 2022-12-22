import searchStringDoouble from './index'

test('I could find the repeated string f', () => {
  const arrayStrings = ['a', 'b', 'c', 'd', 'e', 'f', 'f']
  expect(searchStringDoouble(arrayStrings)).toBe(('f'))
})

test('I could find the repeated string c', () => {
  const arrayStrings = ['a', 'b', 'c', 'd', 'c', 'e', 'f']
  expect(searchStringDoouble(arrayStrings)).toBe(('c'))
})
