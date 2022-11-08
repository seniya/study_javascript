/*
  커링 활용
*/

const curry = (binaryFn) => {
  return function (firstArg) {
    return function (secondArg) {
      return binaryFn(firstArg, secondArg)
    }
  }
}

// const tableOf2 = (y) => 2 * y
// const tableOf3 = (y) => 3 * y
// const tableOf4 = (y) => 4 * y 

// console.log(tableOf2(4))
// console.log(tableOf3(4))
// console.log(tableOf4(4))


const genericTable = (x,y) => x * y

console.log(genericTable(2,2))
console.log(genericTable(2,3))
console.log(genericTable(2,4))


const tableOf2 = curry(genericTable)(2)
const tableOf3 = curry(genericTable)(3)
const tableOf4 = curry(genericTable)(4)

console.log(tableOf2(4))
console.log(tableOf3(4))
console.log(tableOf4(4))


