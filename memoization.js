// const prevValues = [];
// const ourArray = (num) => {
//   if (prevValues[num] != null) {
//     return prevValues[num];
//   }
//   let total = 0;
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       total++;
//     }
//   }

//   prevValues[num] = total;
//   return total;
// };
// console.log(ourArray(30000));
// console.log(ourArray(30000));
// console.log(ourArray(30000));
// console.log(ourArray(30000));
// console.log(ourArray(30000));
// console.log(ourArray(30000));

//fibonacci Sequence
function fib(n, prevValues = []) {
  // null is a falsy value
  if (prevValues[n] != null) {
    return prevValues[n];
  }

  let result = 0;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
  }
  prevValues[n] = result;
  return result;
}

console.log(fib(150));
