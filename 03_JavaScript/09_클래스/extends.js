class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 달립니다!`);
  }
}

// 클래스 상속
class ElecCar extends Car {
  constructor (brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }

  showFuel() {
    console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직입니다!`);
  }
}

const tesla = new ElecCar('tesla', 'blue', 'electircity');

console.log(tesla);
tesla.drive();
tesla.showFuel();