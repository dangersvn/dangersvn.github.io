let animal = {
  eats: true,
  walk() {
    console.log("animal walking");
  }
};

let rabbit = {
  __proto__: animal,
}
rabbit.walk = () => console.log("rabbit walk")

rabbit.walk();