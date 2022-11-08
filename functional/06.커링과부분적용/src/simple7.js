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

const loggerHelper = (mode, initMsg, errMsg, lineNo) => {
  if (mode === 'DEBUG')
    console.debug(initMsg, errMsg + ' at line : ' + lineNo)
  else if (mode === 'ERROR')
    console.error(initMsg, errMsg + ' at line : ' + lineNo)
  else if (mode === 'WARN')
    console.warn(initMsg, errMsg + ' at line : ' + lineNo)
  else 
    throw "Wrong mode"
}

loggerHelper('ERROR', 'Error At Stats.js', 'Unvalid argument passed', 23)

let errorLogger = curry(loggerHelper)('ERROR')('ERROR At Stats.js')
let warnLogger = curry(loggerHelper)('WARN')('WARN At Stats.js')
let debugLogger = curry(loggerHelper)('DEBUG')('DEBUG At Stats.js')

errorLogger('에러가 났어요', 21)
warnLogger('경고가 났어요', 322)
debugLogger('디버그 났어요', 512)

console.warn('ggggg')
