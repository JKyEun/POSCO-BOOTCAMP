const pororo = {
  name: '뽀로로',
  age: 27
}

console.log(pororo.name); // 뽀로로
console.log(pororo['age']); // 27

pororo.gender = 'M';
pororo['height'] = 187;
console.log(pororo); // { name: '뽀로로', age: 27, gender: 'M', height: 187 }

delete pororo.gender;
console.log(pororo); // { name: '뽀로로', age: 27, height: 187 }