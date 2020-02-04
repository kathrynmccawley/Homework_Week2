// let a = 5;
// let b = 4;

// function returnStuff(x, y) {
//   return x + y;
// }

// console.log(returnStuff(a, b));

function factorialFunction(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

console.log(factorialFunction(9));
