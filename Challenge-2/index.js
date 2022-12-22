const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
    return gifts.map(gift => {
      const wrappingPaper = '*'.repeat(gift.length + 2)
      return `${wrappingPaper}\n*${gift}*\n${wrappingPaper}`
    })
  }
const wrapped = wrapping(gifts)
console.log(wrapped)


console.log(wrapped)
