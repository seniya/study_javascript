/*
고차함수 와 추상화
-> 고차 함수는 추상화(abstraction)를 정의하는 것이다.

*/

const forEach = (array, fn) => {
  for (let i=0; i<array.length; i++) {
    fn(array[i])
  }
}

/*
1. 주어진 객체의 모든 키를 반복한다
2. 키에 해당하는 각 객체를 확인한다
3. 2단계 확인되면 키의 값을 얻는다
*/
const forEachObject = (obj, fn) => {
  for (var property in obj) {
    // console.log('property : ', property)  
    // console.log('obj[property] : ', obj[property])
    if (obj.hasOwnProperty(property)) {
      fn(property, obj[property])
    }
  }
}

let paramObj = {a:1, b:2, c:3}
let paramFn = (k,v) => console.log(k + ':' + v)
// forEachObject(paramObj, paramFn)


const unless = (predicate, fn) => {
  if(!predicate) {
    fn()
  }
}


forEach([1,2,3,4,5,6,7], (number)=> {
  // console.log('number : ', number)
  unless((number % 2), () => {
    // console.log(number, ' is even')
  })
})


const times = (times_, fn) => {
  for (var i=0; i< times_; i++) {
    fn(i)
  }
}

// times(5, (i)=>{console.log(i, ' : hello')})


times(100, function(n) {
  unless((n % 2), () => {
    console.log(n, ' is even')
  })
})


