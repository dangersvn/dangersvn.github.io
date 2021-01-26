alert = console.log;
var a;
var b = null;
var c = 23;
console.log(b ? "undefined/null" : "OK");
console.log(a ? "undefined/null" : "OK");

console.log(c ?? "OK")

// split
console.log(camelize("background-color"));
console.log(camelize("background-color") == 'backgroundColor');
function camelize(str) {
  console.log(str);
  let arr = str.split("-");
  return arr.map((s, index) => {
    if (index !== 0) {
      console.log(s[0]);
      return s[0].toUpperCase() + s.slice(1);// s.substring(1,s.length);
    }
    return s;
  }).join("");
}

// filterrange
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values)

alert(arr);

function filterRange(arr, min, max) {
  if (arr) {
    return arr.filter(i => i <= max && i >= min);
  }
}

// filterrange in place
let arr2 = [8, 1, 5, 3, 8, 1];

filterRangeInPlace2(arr2, 1, 4); // removed the numbers except from 1 to 4

alert(arr2); // [3, 1]

function filterRangeInPlace2(arr, min, max) {
  if (arr) {
    let val;
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
      val = arr[i];
      if (val > max || val < min) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
}

// sort decendent
let arr3 = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
arr3.sort((a, b) => b - a);
alert(arr3);

//sorted coppied of arr
let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

alert(sorted); // CSS, HTML, JavaScript
alert(arr4); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
  if (arr) {
    return arr.slice(0).sort((a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    });
  }
}

// calculator extendable
function Calculator() {
  this.methods = {};
  this.addMethod = function (operator, mathFunc) {
    this.methods[operator] = mathFunc;
  }
  this.calculate = function (expression) {
    let arr = expression.split(" ");
    let operator = arr[1]; // assumtion: expression has only one operator
    let left = arr[0];
    let right = arr[2];

    let f = this.methods[operator];
    if (f || isNaN(left) || isNaN(right)) {
      return f(left, right)
    } else {
      throw new Error("Invalid expression");
    }
  }
}
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
let result2 = powerCalc.calculate("2 * 3");

alert(result); // 8
alert(result2); // 8


// map to fullname
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert(usersMapped[0].id) // 1
alert(usersMapped[0].fullName) // Jo


// sort by age
console.log("=============short by age===============" )
john = { name: "John", age: 25 };
let bohn = { name: "Ba", age: 25 };

pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

arr = [pete, john, mary, bohn];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // Bohn
alert(arr[1].name); // John
alert(arr[2].name); // Mary
alert(arr[3].name); // Pete
console.log("=============short by name===============" )
sortByName(arr);
alert(arr[0].name); // Bohn
alert(arr[1].name); // John
alert(arr[2].name); // Mary
alert(arr[3].name); // Pete
console.log("=============short by age then by name ===============" )

sortByAgeThenByName(arr);
alert(arr[0].name); // Bohn
alert(arr[1].name); // John
alert(arr[2].name); // Mary
alert(arr[3].name); //
function sortByAge(arr) {
  if (arr) {
    arr.sort((a, b) => a.age - b.age);
  }
}

function sortByName(arr) {
  if (arr) {
    arr.sort((x, y) => {
      if (x.name < y.name) {
        return -1;
      } else if (x.name > y.name) {
        return 1;
      } else return 0;
    });
  }
}


function sortByAgeThenByName(arr) {
  let compareAge = (x, y) => x - y;
  let compareName = (x, y) => {
    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    } else return 0;
  };
  if (arr) {
    arr.sort((a, b) => compareAge(a.age, b.age) == 0 ? compareName(a.name, b.name) : compareAge(a.age, b.age));
  }
} 

// average age
console.log("============= average ===============" )

 john = { name: "John", age: 25 };
 pete = { name: "Pete", age: 30 };
 mary = { name: "Mary", age: 29 };

 arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); 
function getAverageAge(arr) {
  if(arr) {
    return arr.reduce((acc, currVal) => acc + currVal.age, 0)/arr.length;
  }
}

// find unique string
console.log(" ================ find unique string ==================")
function unique(arr) {
  let uniques = [];
  if(arr) {
    return arr.filter(str => {
      if(uniques.includes(str))
      {
        return false;
      } else {
        uniques.push(str);
        return true;
      }
     } );
  }
}


let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

// Create keyed object from array 
console.log(" ================ Create keyed object from array  ==================")

let users2 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users2);
console.log(usersById);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
function groupById(users) {
  return users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  },{});
}