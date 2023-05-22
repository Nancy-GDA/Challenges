
const multiples = (num) =>{
  for(let index = 1; index<= num;index ++){
   const multipleOf3 = index % 3 === 0
   const multipleOf5 = index % 5 === 0

   if(multipleOf3 && multipleOf5){
    console.log('fizzbuzz')
   }else{
    console.log(multipleOf3 ? 'fizz' : multipleOf5 ? 'buzz' : index)
   }
  }
}

multiples(100)