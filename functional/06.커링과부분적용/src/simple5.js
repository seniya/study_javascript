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

let curry = (fn) => {
  if(typeof fn !== 'function') {
    throw Error('No function provided')
  }
  return function curriedFn(...args) {
    return fn.apply(null, args) // ?????????????
  }
}

const multiply = (x,y,z) => x * y* z


console.log( curry(multiply) )
console.log( curry(multiply)(1,2,3) )
console.log( curry(multiply)(1,2,0) )
