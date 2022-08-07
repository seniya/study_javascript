/*
  once 함수
  주어진 함수를 한번만 실행하는 경우
  - 서드파티 라이브러리를 한 번만 구성해 결제 구성을 한 번만 초기화
  - 은행 결제 요청을 한 번만 처리하는 작업 등
*/

const once = (fn) => {
  let done = false

  return function () {
    return done ? console.log('done'): ((done = true), fn.apply(this, arguments))
  }
}

var doPayment = once(()=> {
  console.log('Payment is done 1')
})

doPayment()

console.log('again')

doPayment()