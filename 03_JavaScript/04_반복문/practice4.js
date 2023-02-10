let i = 2;
let j = 1;

while (i <= 9) {
  console.log(`-----${i}단-----`);
  j = 1;
  while (j <= 9) {
    console.log(`${i} X ${j} = ${i*j}`);
    j++;
  }
  i++;
}