var bikeModule = (function () {
  'use strict';
  var createBicyclePrototye = function () {
    return {
      speed: 0,
      applyBrake: function (value) { this.speed -= value },
      speedUp: function (value) { this.speed += value }
    }
  }

  var createMountainBikeProtoype = function (aPrototype) {
    let defaultGear = 1;
    return Object.create(aPrototype, {
      gear: {
        get() { return defaultGear },
        set(newGearVal) { defaultGear = newGearVal }
      }
    });
  }
  var start = function() {
    let bicyclePrototype = createBicyclePrototye();
    return Object.create(createMountainBikeProtoype(bicyclePrototype));
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
