/*
  - 데이터 플로우
  부분적용: partial
*/
const curry = (fn) => {
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

setTimeout(() => { console.log('Do X task') }, 10);
setTimeout(() => { console.log('Do Y task') }, 10);

const setTimeoutWrapper = (time, fn) => {
  setTimeout(fn, time);
}

const delayTenMs = curry(setTimeoutWrapper)(10)
delayTenMs(() => console.log('Do X task 2'))
delayTenMs(() => console.log('Do Y task 2'))

const partial = function (fn, ...partialArgs) {
  let args = partialArgs
  return function (...fullArguments) {
    let arg = 0
    for (let i=0; i<args.length && arg<fullArguments.length; i++) {
      if (args[i] === undefined) {
        args[i] = fullArguments[arg++] // ?????????????
      }
    }
    return fn.apply(null, args)
  }
}

let delayTenMsP = partial(setTimeout, undefined, 10);
delayTenMsP( () => console.log('Do Y Task 3') )
//delayTenMsP()


