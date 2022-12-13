
const multiples = (num) =>{
    for(let i= 0;i <= num; i++){
      if(i % 3 == 0){
      console.log('Buzz')
    }
        else if(i % 5 == 0){
      console.log('Fizz')
    } 
      if(i % 3 && i % 5){
      console.log('FizzBizz')
    }else{
      console.log(num)
    }      
  }  
  }
  
  multiples(15)