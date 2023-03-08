// function func1(cb) {
//   console.log('1번 함수');
//   cb();
// }

// function func2(cb) {
//   console.log('2번 함수');
//   cb();
// }

// function func3() {
//   console.log('3번 함수');
// }

// func1(() => {
//   console.log('2번 인척 하는 새로 만든 익명함수');
// });

function multiplication(number, callback) {
  console.log(`${number}의 제곱을 계산합니다.`);
  let answer = 0;
  setTimeout(() => {
    answer = number ** 2;
    callback(answer);
  }, 2000);
}

multiplication(4, (answer) => {
  console.log(answer);
});
