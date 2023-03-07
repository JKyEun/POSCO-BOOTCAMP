const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const content = document.querySelector("#content");
let targetEl;

function getCalendarNum(event) {
  const tagName = event.target.tagName;
  if (tagName === "P") {
    // P 태그를 선택한 후 다른 태그를 선택해도 targetEl이 변하지 않게 하기 위함
    targetEl = event.target;
    date.value = `2023년 2월 ${targetEl.innerText}일`;
  } else if (tagName === "TD") {
    targetEl = event.target.children[0];
    date.value = `2023년 2월 ${targetEl.innerText}일`;
  }
}

function writeSchedule() {
  if (content.value === "") {
    return content.setAttribute("placeholder", "이곳에 내용을 입력하세요!");
  }
  const div = document.createElement("div");
  div.innerText = content.value;
  targetEl.parentNode.appendChild(div);
  content.value = "";
}

function removeSchedule(event) {
  const tagName = event.target.tagName;
  if (tagName === "DIV") {
    event.target.remove();
  }
}

calendar.addEventListener("click", getCalendarNum);
calendar.addEventListener("click", removeSchedule);
