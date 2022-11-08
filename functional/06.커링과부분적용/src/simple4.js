/*
  커링 활용 logger
*/

const curry = (binaryFn) => {
  return function (firstArg) {
    return function (secondArg) {
      return binaryFn(firstArg, secondArg)
    }
  }
}


const loggerHelper = (mode, initMsg, errMsg, lineNo) => {
  if (mode === 'DEBUG')
    console.debug(initMsg, errMsg + 'at line : ' + lineNo)
  else if (mode === 'ERROR')
    console.error(initMsg, errMsg + 'at line : ' + lineNo)
  else if (mode === 'WARN')
    console.warn(initMsg, errMsg + 'at line : ' + lineNo)
  else 
    throw "Wrong mode"
}

loggerHelper('ERROR', 'Error At Stats.js', 'Unvalid argument passed', 23)
loggerHelper('ERROR', 'Error At Stats.js', 'undefined argument', 233)
loggerHelper('ERROR', 'Error At Stats.js', 'curry function is not defined', 33)