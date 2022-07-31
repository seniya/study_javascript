/*
sortBy 함수

compareFunction, every, time 함수에서 로직을 추상화

인자로 함수를 취하지 않고 대신 함수를 반환한다(고차 함수는 함수도 반환할 수 있다)
*/

var people = [
  {first: 'aabsdf', last: 'ccdafasdf'},
  {first: 'ccbsdf', last: 'aadafasdf'},
  {first: 'bbbsdf', last: 'bbdafasdf'},
]

const sortBy = (property) => {
  return (a, b) => {
    var result = (a[property] < b[property]) ? -1 :(a[property] > b[property]) ? 1 : 0
    return result
  }
}

const result1 = people.sort()
console.log(result1)


const result2 = people.sort(sortBy('first'))
console.log(result2)

const result3 = people.sort(sortBy('last'))
console.log(result3)