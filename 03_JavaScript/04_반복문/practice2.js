let count = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 || i % 2 === 0) {
    count += i;
  }
}

console.log(count); // 3050