/*
  커링: n개 인자의 함수를 중첩된 단항 하수로 변화시키는 과정
*/

const add =(x,y) => x+ y

console.log(add(2,3))


const addCurried = (x) => ((y) => x+ y)
// const addCurried = x => y => x+ y


console.log(addCurried(2))
console.log(addCurried(2)(3))

const curry = (binaryFn) => {
  return function (firstArg) {
    return function (secondArg) {
      return binaryFn(firstArg, secondArg)
    }
  }
}

let autoCurriedAdd = curry(add)

console.log(autoCurriedAdd(2)) 
console.log(autoCurriedAdd(2)(3)) 

