/*
  unary 함수
  array - map
  콜백함수의 결과를 반환한다
*/

const result1 = [1,2,3].map((a) => {return a*a})
//console.log(result1)

const result2 = ['1', '2', '3'].map(parseInt)
//console.log(result2)

const result3 = ['1', '2', '3'].map((a) => parseInt(a))
//console.log(result3)


/*
var unary = function unary(fn) {
  return fn.length === 1 ? fn : function (arg) {
    return fn(arg);
  };
};
*/
// const unary = (fn) => fn.length === 1 ? fn : (arg)=> fn(arg)

const unary = function unary(fn) {
  console.log('unary fn : ', fn)
  console.log('unary fn.length : ', fn.length)
  return fn.length === 1 ? fn : function (arg1, arg2) {
    console.log('unary arg : ', arg1, arg2)
    return fn(arg1);
  };
};

const result4 = ['1', '2', '3'].map(unary(parseInt))
console.log(result4)