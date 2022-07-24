/*
함수: f(X) = Y

- 함수는 인자를 가져야 한다
- 함수는 값을 반환해야 한다
- 함수는 외부가 아닌 자체 인자를 받아서만 동작한다
- 주어진 X 하나에 Y 는 오직 하나다.
*/

// 세금계산 함수
var percentValue = 5
var calculateTax = (value) => {
  return value / 100 * ( 100 + percentValue)
}

var calculateTax = (value, percentValue) => {
  return value / 100 * ( 100 + percentValue)
}

/*
참조 투명성
-> 모든 함수가 동일한 입력에 대해 동일한 값을 반환 받도록 선언. 이에 대한 속성

함수는 주어진 입력에 대해 동일한 값을 반환할 것이브로 사실상 캐시가 가능

*/

// 명령형, 선언형, 추상화


// 명령형
var array = [1,2,3]
for (i=0; i<array.length; i++) {
  console.log(array[i]) // 1,2,3 출력
}

// 선언형
var array = [1,2,3]
array.forEach(
  (element) => console.log(element) // 1,2,3 출력
) 

/*
함수형 프로그래밍의 장점

순수함수
병렬코드
캐시
파이프라인과 컴포저블(합성)
*/

// 간단한 순수 함수
// 참조투명성 -> 부수효과 없음
// 읽고, 이해하고, 테스트하기 쉽다.
// 의미있는 이름이어야 한다. dd 로 이름을 바꾸면 안 된다
var double = (value) => value * 2

// 나쁜 함수 예제
var global = "globalValue"
var badfunction = (value) => {
  global = "changed"
  return value * 2
}

//  간단한 게임
Math.max(3,4,5,6)

// 순수하지 않은 함수
var global = "something"
var function1 = (input) => {
  // input doing
  // change global
  global = "somethingElse"
}

var function2 = () => {
  if (global === "something") {
    // 비지니스 로직
  }
}

// 순수 함수
var function1 = (input, global) => {
  // input doing
  // change global
  global = "somethingElse"
}

var function2 = (global) => {
  if (global === "something") {
    // 비지니스 로직
  }
}

var longRunningFunction = (ip) => {
  // 오래 실행되는 작업을 하고 반환한다.
}

var longRunningFnBookKeeper = {2:3, 4:5}
// longRunningFnBookKeeper 에 키가 있는지 확인한다.
// 참이면 결과를 반환하고 그렇지 않다면 객체를 갱신한다.
longRunningFnBookKeeper.hasOwnProperty(ip) ? longRunningFnBookKeeper[ip] : longRunningFnBookKeeper[ip] = longRunningFunction(ip)


/*
순수 함수는 수학적인 함수다.

수학에서 함수는 입력 세트와 각 입력이 정확히 해당 출력과 관련이 있는 속성을 가진 출력 세트와의 관계다.
함수에 대한 입력을 인자라고 하면, 출력을 값이라고 부른다.
주어진 함수에 허용되는 모든 입력값을 함수의 도메인(domain)이라고 하며, 이때 출력되는 허용 집합을 코도메인(codomain)이라고 한다.
*/


/*
자바스크립트는 함수형 프로그래밍 언어인가?
예 / 아니오 모두
-> 인자 없이 값을 취하는 빈 함수 가능
var useless = () => {}

--> 자바스크립트는 순수 함수형 언어가 아니라 멀티패러다임 언어



*/



