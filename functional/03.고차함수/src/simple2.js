var tellType = (arg) => {
  if (typeof arg === 'function') {
    arg()
  } else {
    console.log('The passed data is '+ arg)
  }
}

let dataFn = () => {
  console.log('hello fn')
}

tellType(dataFn)

