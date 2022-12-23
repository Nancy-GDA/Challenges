import letterMissing from './index'

test('Find the missing letter  d in a string ', () => {
  const testString = 'the quick brown box jumps over a lazy fog'
  expect(letterMissing(testString)).toBe(('d'))
})

test('Find the missing letter  f in a string ', () => {
  const testString = 'the quick brown box jumps over a lazy dog'
  expect(letterMissing(testString)).toBe(('f'))
})
