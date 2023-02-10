let isAdult = true;
let isVIP = false;
let isDrunken = true;
let isMoneyGiven = true;

if (((isAdult && isVIP) && !isDrunken) || isMoneyGiven) {
  console.log("통과");
} else {
  console.log("돌아가");
}