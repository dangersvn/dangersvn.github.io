function MyObject() {
  this.name = "default";
}
let obj = new MyObject();
let obj1 = {name:"default2"};

let obj2 = new obj.constructor();

console.log(MyObject.prototype.constructor == MyObject);
console.log(MyObject());