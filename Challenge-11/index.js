const letterMissing = (string) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z']

  let letter = ''

  for (const itemString of alphabet) {
    if (!string.includes(itemString)) {
      letter += itemString
    }
  }
  return letter
}

export default letterMissing
