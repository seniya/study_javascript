/*
sort 함수
Array 프로토타입에서 사용 가능한 내장함수이다

arr.sort([compareFunction])
- compareFunction 선택적: 넣지 않으면 요소는 문자열로 변화되면서 정렬, 유니코드 순서대로 문자열이 비교된다.

function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1
  }
  if (a is greater than b by the ordering criterion) {
    return 1
  }
  // a === b
  return 0
}

*/

var fruit = ['apples','cherries','bananas']
// console.log(fruit.sort())

var people = [
  {first: 'aabsdf', last: 'ccdafasdf'},
  {first: 'ccbsdf', last: 'aadafasdf'},
  {first: 'bbbsdf', last: 'bbdafasdf'},
]
const result1 = people.sort()
console.log(result1)

const result2 = people.sort(
  (a,b) => {
    return (a.first < b.first) ? -1 : (a.first > b.first) ? 1 : 0
  }
)

console.log(result2)


const result3 = people.sort(
  (a,b) => {
    return (a.last < b.last) ? -1 : (a.last > b.last) ? 1 : 0
  }
)

console.log(result3)



