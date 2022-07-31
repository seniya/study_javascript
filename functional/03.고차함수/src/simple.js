let fn = () => {}
console.log(typeof fn)

let tellType = (arg) => {
  console.log(typeof arg)
}

let data = 1
tellType(data)

let dataFn = () => {
  console.log('hello world')
}

tellType(dataFn)

