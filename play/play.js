
(function(x,y){
  // "use strict";
  console.log(this);
  console.log(x,y);
  const obj = {x:2, foo: function(){console.log(this.x);}};
  obj.foo();
  obj.bar = () => {
    console.log(this);
    console.log(this.x);
  } 
  obj.bar();
})(5,7);
var x = 10;
