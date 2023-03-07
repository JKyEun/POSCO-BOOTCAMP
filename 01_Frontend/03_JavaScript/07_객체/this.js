var person = {
  firstName: '경은',
  lastName: '장',
  getKoreanName: function () {
    console.log(this.lastName + ' ' + this.firstName);
  },
};
 
person.getKoreanName(); // '장 경은'