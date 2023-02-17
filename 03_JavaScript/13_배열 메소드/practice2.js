const arr = [];
let sum = 0;

for (let i = 0; i < 100; i++) {
  arr.push(i+1);
}

arr.map(x => sum += x);

console.log(arr);
console.log(sum);