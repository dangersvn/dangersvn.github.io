var obj = {
  key: 'value'
}

var obj2 = obj;

delete obj2.key;
console.log(obj2)(function (x, y) {
  console.log(this);
  let myglobal = 10;
  console.log(x, y);
  const obj = {
    x: 2, foo: function () {
      console.log(this);
      return () => { 
        console.log(x, this.x, this); 
        console.log("this in closure ");
      }
    }
  };
  let f = { z: 111 };
  f.func = obj.foo;
  let anf = f.func();
  arr = [];
  [].concat
  console.log("=====");
  anf();
  console.log("=====");
})(5, 7)