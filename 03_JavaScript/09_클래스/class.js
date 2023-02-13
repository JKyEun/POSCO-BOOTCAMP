// // 생성자 함수 버전
// const hyundai = new Car('hyundai', 'blue');
// const porsche = new Car('porsche', 'black');

// hyundai.drive();

// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.drive = () => {
//     console.log(this.brand + ' ' + this.color);
//   }
// }

// 클래스 버전
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  
  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행중입니다.`);
  }
}

const audi = new Car("audi", "red");
const hyundai = new Car("hyundai", "blue");

audi.drive();
hyundai.drive();
