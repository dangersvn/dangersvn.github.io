
console.log(sum(1)(2))
console.log(sum(5)(-1));

function sum(a) {
  return function(b) {
    return a+b;
  }
}