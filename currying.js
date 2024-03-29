
// function add(a){
//   return function(b){
//     return function(c){
//       return function(){
//         return a + b + c;
//       }
//     }
//   }
// }

// const add = a => b => b ? add(a + b) : a;

function add(a) {
    return function(b) {
        if(b) return add(a+b);
        return a;
    }
}

console.log(add(5)(4)(2)(3)(9)())


function curry(func) {
  return function curried(...args) {
    if (args.length !== func.length) {
      return curried.bind(null,...args);
    } 
    return func(...args);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert( curriedSum(1, 2, 3) ); // 6, still callable normally
alert( curriedSum(1)(2,3) ); // 6, currying of 1st arg
alert( curriedSum(1)(2)(3) ); // 6, full currying
