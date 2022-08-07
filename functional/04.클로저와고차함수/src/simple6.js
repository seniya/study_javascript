/*
  assign 함수

  - 자바스크립트 객체는 유동적. 객체의 상태가 생성된 후 변경 가능

*/

var a = {name : 'kim'}
var b = { age : 30}
var c = { sex : 'M'}

function objectAssign(target, source) {
  var to = {}
  for (var i=0; i< arguments.length; i++) {
    var from = arguments[i]
    var keys = Object.keys(from)
    for (var j =0; j < keys.length; j++) {
      to[keys[j]] = from[keys[j]]
    }
  }
  return to
}

var customObjectAssign = objectAssign(a,b,c)
console.log(customObjectAssign)

// ES6 Object.assign
var nativeObjectAssign = Object.assign(a,b,c)
console.log(nativeObjectAssign)


var book = {
  id: 111,
  title: 'title 1234',
  author: 'kim',
  rating: [4.7],
  reviews: [{good:4, excellent: 12}]
}

console.log(Object.entries(book))
console.log(Object.entries(book)[1])
