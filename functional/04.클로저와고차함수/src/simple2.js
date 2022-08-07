/*
  tap 함수

  var tap = function tap(value) {
  return function (fn) {
    typeof fn === 'function' && fn(value)
    console.log(value);
  };
};
*/

const tap = (value) => {
  return (fn) => {
    typeof(fn) === 'function' && fn(value)
    console.log(value)
  } 
}



tap('fun')((it)=>console.log('value is :', it))

const forEach = (array, fn) => {
  for (let i=0; i<array.length; i++) {
    fn(array[i])
  }
}


forEach([1,2,3], (a)=>
  tap(a)(()=>
    {
     console.log(a) 
    }
  )
)
