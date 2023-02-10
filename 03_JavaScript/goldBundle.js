// nodejs 로 입력을 받기 위한 코드
const readline = require("readline");

// 코드를 읽을 때 9, 10으로 숫자가 들어가면 혼동이 오므로 대문자 변수로 선언
const FAKE = 9;
const REAL = 10;

// 퀴즈 함수
function quiz(num) {
  // 랜덤한 자루 생성을 위한 배열 선언
  const sack = [];
  // 입력받은 자루의 수인 num 에 따라 가짜 금화가 든 자루를 설정하는 랜덤 수
  const rand = Math.floor(Math.random() * num) + 1;

  // 랜덤 수에 따라 진짜와 가짜 금화 자루 생성
  for (let i = 0; i < num; i++) {
    i + 1 === rand ? sack.push(FAKE) : sack.push(REAL);
  }

  let sum = 0;

  // 자루 확인용 콘솔 로그
  console.log(sack);

  // 생성된 배열에 map 을 사용하여 금화 무게 합산 처리
  sack.map((el, index) => {
    el === FAKE ? (sum += (index + 1) * FAKE) : (sum += (index + 1) * REAL);
  });

  // 1 ~ n 까지의 숫자의 합을 구하는 공식을 사용하여 금화가 전부 진짜일 때의 총 무게 값 계산
  const trueSum = ((num * (num + 1)) / 2) * 10;

  // trueSum 과 계산한 sum 의 차이를 통해 가짜 금화가 든 자루 출력
  console.log(`${trueSum - sum} 번째 자루에 가짜 금화가 들었습니다!`);
}

// 안내용 문구
console.log("자루는 몇개 존재 하나요?");

// 입력을 받기 위한 코드
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (input) {
  // 입력은 문자로 받아지기 때문에 숫자로 변경하여 quiz 함수에 전달
  const inputNum = Number(input);

  // 퀴즈 함수 실행
  quiz(inputNum);

  // 퀴즈 함수 종료후 입력 모드 종료
  rl.close();
}).on("close", function () {
  process.exit();
});