import searchNumber from './index'

test('Should figure two numbers out 2 & 4 ', () => {
  const array1 = [1, 2, 3, 4, 5]
  const array2 = [0, 2, 4, 6, 8]
  expect(searchNumber(array1, array2)).toEqual([2, 4])
})

test('Should figure three numbers out 12 & 8 & 2 ', () => {
  const array1 = [1, 2, 3, 5, 8, 9, 12]
  const array2 = [0, 2, 4, 6, 8, 11, 12, 13]
  expect(searchNumber(array1, array2)).toEqual([2, 8, 12])
})
