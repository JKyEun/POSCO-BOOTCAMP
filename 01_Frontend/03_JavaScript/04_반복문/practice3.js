let count = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 1) {
    continue;
  }
  count += i;
}

console.log(count); // 250500