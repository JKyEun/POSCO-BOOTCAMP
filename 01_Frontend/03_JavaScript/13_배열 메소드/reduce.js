const numbers = [2, -5, -123, 59, -5480, 24, 0, -69, 349, 3];

const result = numbers.reduce(
  (acc, item, index) => {
    if (item < 0) {
// 처리할 현재 요소가 음수일 경우
      acc[0]++;
    } else if (item > 0) {
// 처리할 현재 요소가 양수일 경우
acc[1]++; }
    return acc;
  },
[0, 0] );

console.log(result); // [4, 5]