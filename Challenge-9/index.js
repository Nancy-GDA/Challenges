const searchNumber = (list1, list2) => {
  const listArray = list1.filter((element) =>
    list2.includes(element))
  console.log(listArray)
  // console.log(listArray1)
  // for (const item1 of list) {
  //   for (const item2 of list2) {
  //     if (item1 === item2) {
  //       listArray1.push(item1)
  //     }
  //   }
  // }
  return listArray
}

export default searchNumber
