let animal = {
  eats: true,
  walk() {
    console.log("animal walking");
  }
};

let rabbit = Object.create(animal,
  {
    jumps: {
      value: true,
      writable: true
    }
  })

  console.log(rabbit.jumps); // true
  console.log(rabbit.eats); // true
  console.log(rabbit.hasOwnProperty('eats'));
  console.log(rabbit.hasOwnProperty('jumps'));
  
  delete rabbit.jumps; 
  
  // delete rabbit.eats;// can't delete property in a prototype by using the rabbit but the animal
  // delete animal.eats;

  // rabbit.extra = {};
  // delete rabbit.extra;

  for(let prop in rabbit) {
    console.log("prop :" + prop);
  }