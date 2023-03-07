function getKoreanName() {
  console.log(this.lastName + this.firstName);
}

const person1 = {
  firstName: '경은',
  lastName: '장',
  getKoreanName
};

const person2 = {
  firstName: '순호',
  lastName: '한',
  getKoreanName
}

person1.getKoreanName(); // '장경은'
person2.getKoreanName(); // '한순호'