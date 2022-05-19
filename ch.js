'use strict';

//challenge # 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h   `);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h   `);
};
// const awais = new Car(solid, 20)
const awais = new Car('MBW', 120);
const rana = new Car('Mercedes', 95);
console.log(awais, rana);
awais.accelerate();
rana.accelerate();
awais.brake();
rana.brake();

//////////////////////////////////
//challenge # 2
class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h   `);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h   `);
    return this;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
}
const ford = new Car2('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);

///////////////////////////////////////////////////
//challenge # 3

/*const Ev = function(make, speed, charge) {

    Car.call(this, make, speed);
    this.charge = charge;
}
Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}
Ev.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h with a charge ${this.charge}%`)
}
const tesla = new Ev('Tesla', 120, 23);
tesla.chargeBattery(90)
console.log(tesla)
tesla.brake()
tesla.accelerate();*/

//challenge # 4
class EvCv extends Car2 {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h with a charge ${this.#charge}%`
    );
    return this;
  }
  //   brake() {
  //     console.log(`, with a charge ${this.#charge}`);
  //   }
}
const rivian = new EvCv('Rivian', 120, 23);
// tesla.chargeBattery(90);
console.log(rivian);
// rivian.brake();
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

//also can access the setter getter of parent
console.log(rivian.speedUS);
