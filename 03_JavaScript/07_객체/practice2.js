function showHeight() {
  console.log(this.height);
}

const pororo = {
  name: "뽀로로",
  height: 120,
  getName() {
    console.log(pororo.name);
  },
  showHeight
}

const crong = {
  height: 110,
  showHeight
}

pororo.getName(); // 뽀로로
pororo.showHeight(); // 120
crong.showHeight(); // 110