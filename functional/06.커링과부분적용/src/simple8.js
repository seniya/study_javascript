/*
  새로운 커리
*/
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

let match = curry(function(expr, str) {
  return str.match(expr)
})

let hasNumber = match(/[0-9]+/)

let filter = curry(function(f, any) {
  return any.filter(f)
})

let findNumbersInArray = filter(hasNumber)

console.log(findNumbersInArray(['js', 'number1']))


let map = curry(function(f, ary) {
  return ary.map(f)
})

let squareAll = map((x) => x * x)

console.log(squareAll)
console.log(squareAll([1,2,3]))