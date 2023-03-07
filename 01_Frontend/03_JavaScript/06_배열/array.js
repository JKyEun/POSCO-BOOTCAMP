const kdt = ['호준', '계환', '성희', '경은'];

kdt.push('경은');
console.log(kdt);

console.log(kdt.pop());

kdt.unshift('경은');
console.log(kdt);

kdt.shift();
console.log(kdt);

for (let i = 0; i < kdt.length; i++) {
  console.log(kdt[i]);
}