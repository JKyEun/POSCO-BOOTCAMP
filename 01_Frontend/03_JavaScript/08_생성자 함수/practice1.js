function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showInformation = function () {
    console.log(`이름: ${this.name}\n성별: ${this.gender}`);
  };
}

const 장경은 = new Kdt("장경은", "남");
const 김호준 = new Kdt("김호준", "남");
const 김계환 = new Kdt("김계환", "남");
const 조성희 = new Kdt("조성희", "여");

장경은.showInformation();
// 이름: 장경은
// 성별: 남
김호준.showInformation();
// 이름: 김호준
// 성별: 남
김계환.showInformation();
// 이름: 김계환
// 성별: 남
조성희.showInformation();
// 이름: 조성희
// 성별: 여
