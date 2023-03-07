let num1 = 2;
console.log(num1**3); // 8

let num2 = Math.floor(Math.random()*10);
console.log(num2); // 난수 무엇인지 출력
console.log(num2 % 2); // 생성된 난수가 홀수이면 1, 짝수이면 0

let num3 = 3;
console.log((++num3) + num1); // 6
num3 = 3;
console.log((num3++) + num1); // 5
console.log(num3); // 4