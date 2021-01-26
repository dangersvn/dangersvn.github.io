let animal = {
  eat() {
    this.full = true;
  }
};

console.dir(animal);
console.log(animal.hasOwnProperty("full"));
console.log(animal.hasOwnProperty("eat"));

let rabbit = {
  __proto__: animal
};

rabbit.eat();

console.log(animal.full);
console.log(rabbit.full == true)