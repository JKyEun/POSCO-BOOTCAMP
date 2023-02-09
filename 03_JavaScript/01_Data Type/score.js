let mathScore = Number(prompt("수학 점수를 입력하세요!"));
let engScore = Number(prompt("영어 점수를 입력하세요!"));

let avg = (mathScore + engScore) / 2;

console.log(
  `수학 점수: ${mathScore}
영어 점수: ${engScore}
평균 점수: ${avg}`
);
