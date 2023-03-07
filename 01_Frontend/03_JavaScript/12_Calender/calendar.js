const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const content = document.querySelector("#content");
const calendarNums = document.querySelectorAll("p");

function getCalendarNum(t) {
  date.value = `2023년 2월 ${t.innerText}일`;
  date.id = t.innerText;
}

function writeSchedule() {
  if (content.value === "") {
    return;
  }
  const div = document.createElement("div");
  const day = date.id;
  const tdToAdd = document.querySelector(`.day${day}`).parentNode;
  div.setAttribute("onclick", "removeSchedule(this)");
  div.innerText = content.value;
  tdToAdd.appendChild(div);
  content.value = "";
}

function removeSchedule(t) {
  t.remove();
}

calendarNums.forEach(function (calendarNum, i) {
  calendarNum.setAttribute("onclick", "getCalendarNum(this)");
  calendarNum.classList.add(`day${i - 2}`);
});
