/*
  escribir una funcion llamada countUniqueValues en la cual recibe un arreglo de numeros enteros
  y debes regresar la cantidad de valores unicos que tiene el arreglo inicial

  ejemplo: 

  countUniqueValues([1,1,1,1,1,2]) => 2
  countUniqueValues([]) => 0
  countUniqueValues([1,2,2,2,2,2,3,4,3,4,3,4,5,6,7,5,6,7]) => 7
*/

// Frequency Pattern
// const countUniqueValues = (array) => {
//  if(!array.length) return 0

//  const noRepit = {} // {1: true, 2: true}

//  array.forEach(element => {
//   noRepit[element] = noRepit[element] || true
//  });

//  let counter = 0
//  for (const _ in noRepit) {
//   counter++
//  }

//  return counter
// }

// Multiple pointer Pattern
// const countUniqueValues = (array) => {
//   if(array.length === 0)  return 0

//   let inicio = 0
//   let final = 1
//   let contadorValores = 1 

//   while(final < array.length){
//     if(array[inicio] !== array[final]){
//       inicio = final
//     }
//   }
//   return contadorValores
// }

// console.log(countUniqueValues([1,1,1,1,1,2])) //[1,2,1,1,1,1,1]
// console.log(countUniqueValues([]))
// console.log(countUniqueValues([1,2,2,2,2,2,3,3,3,4,4,4,5,5,6,6,6,7])) 

/**
 * escribe una funcion llamada match brackets, la cual recibe un string con una secuencia de parentecis
 * la funcion debe poder detectar si el string tiene los  cierres correspondientes de parentesis.
 * Ejemplo:
 * 
 * matchBrackets('(())') => true
 * matchBrackets('({})') => true
 * matchBrackets('({[]})') => true
 * matchBrackets('({])') => false
 */

const matchBrackets = (string) =>{
  const simbolosPares = []
  const simbolos = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for(const simbolo of string){
    if(simbolos[simbolo]){
      simbolosPares.push(simbolo)
      continue
    }

    //['[','{','[']

    
  }

}

console.log(matchBrackets('(())'))
console.log(matchBrackets('({})'))
console.log(matchBrackets('([])'))
console.log(matchBrackets('([})'))
