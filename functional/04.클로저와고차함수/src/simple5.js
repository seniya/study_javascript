/*
  memoize 함수
  
  -순수함수랑 인자에 대해서만 처리하는 함수임.
  - 순수 함수의 결과는 순수하게 인자에만 결정된다.

*/

var factorial = (n) => {
  if (n ===0 ) {
    return 1
  }
  return n * factorial(n-1)
}

const result1 = factorial(2)
console.log(result1)

const result2 = factorial(3)
console.log(result2)

const result3 = factorial(10)
console.log(result3)

/*
var memoized = function memoized(fn) {
  var lookupTable = {};
  return function (arg) {
    return lookupTable[arg] || (lookupTable[arg] = fn(arg));
  };
};
*/
const memoized = (fn) => {
  const lookupTable = {}
  return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg)) 
}

let fastFactorial = memoized((n)=>{
  if (n === 0) {
    return 1
  }
  return n * fastFactorial(n-1)
})


const result11 = fastFactorial(2)
console.log(result11)

const result12 = fastFactorial(3)
console.log(result12)

const result13 = fastFactorial(10)
console.log(result13)