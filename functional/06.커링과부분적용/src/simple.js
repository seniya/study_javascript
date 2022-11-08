/*
  1. 단항 함수(unary function): 인자 하나
  2. 이항 함수(binary function): 인자 둘
  3. 가변 인자 함수(variadic) : 여러개의 인자
*/

function variadic (a) {
  console.log(a)
  console.log(arguments)  
}

variadic(1,2,3)


var variadic2 = (a, ...spredarg) => {
  console.log(a)
  console.log(spredarg)
}

variadic2(1,2,3)