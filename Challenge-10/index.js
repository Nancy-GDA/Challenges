
const searchStringDoouble = (strings) => {
  const objStrings = {}

  for (const string of strings) {
    if (objStrings[string]) {
      return string
    }
    objStrings[string] = true
  }
}

export default searchStringDoouble
