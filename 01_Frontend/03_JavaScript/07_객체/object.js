const me = {
  name: '장경은',
  age: 27
};

console.log(me.name);
console.log(me['age']);

me.hobby = 'basketball'; // 추가
console.log(me.hobby);

delete me.hobby; // 삭제
console.log(me);

console.log('weight' in me);
console.log('age' in me);