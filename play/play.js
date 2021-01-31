let s = "obj";
var t = "obj2";
console.log(this.s);
// console.log(window.t);
function f() {
  if(this) console.log(this.s);
  else console.log(this);

}
f.s = "that";
