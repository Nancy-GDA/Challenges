
const chessboard = (heigth,width) => {
  let board = ''
  for(let index = 0 ; index < heigth; index++){
    for(let i = 0; i < width; i++){
      board += ( index + i) % 2 === 0 ? ' '  : '#'
    }
    board += '\n'
  }
   return board
}

let board =  chessboard(12,12)
console.log(board)


