alert = console.log;
function makeWorker() {
  alert(this);

  // let name = "Pete";
  return function () {
    // let name = "dang";
    return function () {
      alert(name);
    };
  }

}

let name = "John";

// create a function
let work = makeWorker()()();

// call it
// work(); 