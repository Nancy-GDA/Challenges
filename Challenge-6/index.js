function countHours(year, holidays) {
  const days = holidays.map((holiday) =>{       
    const date = new Date (`${year}-${holiday}`)
    console.log(date)
    return date.getDay()
  })
  return (
    days.filter((day)=>{
      return day > 0 && day < 6
    }).length * 2
  )
}

const year = 2022
const holidays = ['01/06','04/01','12/08','05/01','12/25','12/31']
const result =  countHours(year,holidays)
console.log(result)
