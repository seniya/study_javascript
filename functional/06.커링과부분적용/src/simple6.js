/*
  새로운 커리
*/

const curryOldVer = (binaryFn) => {
  return function (firstArg) {
    return function (secondArg) {
      return binaryFn(firstArg, secondArg)
    }
  }
}

let curryOldVer2 = (fn) => {
  if(typeof fn !== 'function') {
    throw Error('No function provided')
  }
  return function curriedFn(...args) {
    return fn.apply(null, args) // ?????????????
  }
}

let curry = (fn) => {
  if(typeof fn !== 'function') {
    throw Error('No function provided')
  }
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function () {
        return curriedFn.apply(null, args.concat( [].slice.call(arguments) )) // ????????????? ????????????? 
      }
    }
    return fn.apply(null, args) // ?????????????
  }
}

// const add =(x) => x+ 1
// console.log(add.length)

const multiply = (x,y,z) => x * y* z

console.log(curry(multiply)(3)(2)(1)) 

let curriedMul3 = curry(multiply)(3)
let curriedMul2 = curriedMul3(2)
let curriedMul1 = curriedMul2(1)

console.log(curriedMul3)
console.log(curriedMul2)
console.log(curriedMul1)


