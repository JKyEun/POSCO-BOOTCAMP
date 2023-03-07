let arr = [];

for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

const answer = arr.reduce((prev, cur) => prev + cur, 0);

console.log(answer);

