function Student(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showName = () => {
    console.log(this.name);
  }
}

const 장경은 = new Student('장경은', 'M');
const 김호준 = new Student('김호준', 'M');

장경은.showName();
김호준.showName();