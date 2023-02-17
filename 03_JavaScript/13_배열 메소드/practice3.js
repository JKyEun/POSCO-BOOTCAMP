let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고", "멜론"];

const sameArr = fruits1.filter(x => fruits2.includes(x));
const diffArr = fruits1.filter(x => !fruits2.includes(x));
const diffArr2 = fruits2.filter(x => !fruits1.includes(x));


console.log(sameArr);
// [ '사과', '파인애플', '수박', '참외', '오렌지', '망고' ]
console.log(diffArr.concat(diffArr2));
// [ '딸기', '자두', '멜론']