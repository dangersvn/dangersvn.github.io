var y = 10;

function main() {

  console.log("x1: " + x);
  if (x > 0) {
    // var x = 30;
    console.log("x2: " + x);
  }
  x = 40;
  var f = function (x) { console.log("x3: " + x); }
  f(50);
}
main();