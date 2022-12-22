const fs = require('fs');

const shapesPoints = { A:1, B:2, C:3, X:1, Y:2, Z:3 }
/*
A = Rock
B = Paper
C = Scissors

X = Rock
Y = Paper
Z = Scissors
*/

const loseCase = {
  A:'Z',
  B:'X',
  C:'Y'
}

const winCase = {
  A:'Y',
  B:'Z',
  C:'X'
}

const drawCase = {
  A:'X',
  B:'Y',
  C:'Z'
}


fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const result = game(data.split('\n'))
  console.log(result)
})

const isWin = (myTurn,opponet) => 
    (myTurn === 'X' && opponet === 'C')  || (myTurn === 'Y' && opponet === 'A') || (myTurn === 'Z' && opponet === 'B')

const isDraw = (myTurn,opponet) => 
    (myTurn === 'X' && opponet === 'A')  || (myTurn === 'Y' && opponet === 'B') || (myTurn === 'Z' && opponet === 'C')

const calcuatePoints = (opponet, myTurn, score) => {
      if(isDraw(myTurn,opponet)){
        score += 3 + shapesPoints[myTurn]
        return score
      }

      if(isWin(myTurn, opponet)){
        score += 6 + shapesPoints[myTurn]
        return score
      }
      
      score +=  shapesPoints[myTurn]
      return score
}

const newStrategy = (opponet, myTurn, score) => {
    let myShape
    
    if(myTurn === 'Y'){
      myShape = drawCase[opponet]
    }
    if (myTurn === 'X') {
      myShape = loseCase[opponet]
    }

    if (myTurn === 'Z') {
      myShape = winCase[opponet]
    }

    return calcuatePoints(opponet, myShape, score)
}


const game = (strategyGuide) =>{
    let score = 0
    let newScore = 0

    for(let item of strategyGuide){
        const [opponet, myTurn]  =  item.split(' ')
        score = calcuatePoints(opponet, myTurn, score)
        newScore = newStrategy(opponet, myTurn, newScore)
    }

    return  [score,newScore]
}
//1st Answer 15337
//2nd Answer 11696
