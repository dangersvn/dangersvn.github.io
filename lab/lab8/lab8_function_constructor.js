var bikeModule = (function () {
  'use strict';
  function BicyclePrototye() {
    this.speed = 0;
    this.applyBrake = function (value) { this.speed -= value };
    this.speedUp = function (value) { this.speed += value };
  }

  function MountainBikeProtoype(aPrototype) {
    this.defaultGear = 1;
    Object.setPrototypeOf(this, aPrototype);
    Object.defineProperty(this, "gear", {
      get() { return this.defaultGear },
      set(val) { this.defaultGear = val }
    });
  }
  var start = function () {
    let bicycleProto = new BicyclePrototye();
    return new MountainBikeProtoype(bicycleProto);
  }
  return { start }
})()

let bike1 = bikeModule.start();
console.log("==================== Bike 1 ====================");
console.log("Current speed:", bike1.speed);
console.log("Current gear:", bike1.gear);
console.log("Set gear by 2");
bike1.gear = 2;
console.log("Current gear:", bike1.gear);
bike1.speedUp(10);
console.log("Current speed:", bike1.speed);

let bike2 = bikeModule.start();
console.log("==================== Bike 2 ====================");
console.log("Current speed:", bike2.speed);
console.log("Current gear:", bike2.gear);
console.log("Set gear by 2");
bike2.gear = 2;
console.log("Current gear:", bike2.gear);
bike2.speedUp(20);
console.log("Current speed:", bike2.speed);

console.log("Set gear by 3");
bike2.gear = 3;
bike2.speedUp(30);

console.log("Current speed:", bike2.speed);
