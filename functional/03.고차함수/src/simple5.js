/*
현실에서의 고차함수
*/


/*
every 함수
배열의 내용이 숫자인지 객체 등인지 확인해야 할때
*/
const every1 = (arr, fn) => {
  let result = true
  for (let i=0; i<arr.length; i++) {
    result = result && fn(arr[i])
  }
  console.log(result)
  return result
}

const every = (arr, fn) => {
  let result = true
  for (const value of arr) {
    result = result && fn(value)
  }
  console.log('every : ', result)
  return result
}

// every([NaN, NaN], isNaN)
// every([NaN, 1], isNaN)
// every([1, 1], isNaN)

/*
some 함수(any 함수라고도 한다)
every 함수 와는 완전히 반대로, 전달된 함수에 대해 배열 요소가 참을 반환하면 참을 반환하는 함수
*/


const some = (arr, fn) => {
  let result = false
  for (const value of arr) {
    result = result || fn(value)
  }
  console.log('some : ', result)
  return result
}

// some([NaN, NaN], isNaN)
// some([NaN, 1], isNaN)
// some([1, 1], isNaN)

