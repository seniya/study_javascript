/*
  클로저

  inner 함수를 클로저 함수라고 부른다. 
  클로저는 스코프 사슬(스코프 레벨)에 접근할 수 있어 유용하다
*/

let global_ = 'global_'
function outer() {

  let outer_ = 'outer_'
  function inner() {
    let a = 5;
    console.log(global_)
    console.log(outer_)
  }
  inner()
}

// outer()

var fn = (arg) => {
  let outer = 'visible'
  let innerFn = () => {
    console.log(outer)
    console.log(arg)
  }
  return innerFn
}

var closuerFn = fn(5)
closuerFn()



