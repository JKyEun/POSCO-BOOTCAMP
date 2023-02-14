const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

function addTask() {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요!");
  } else {
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    const button = document.createElement("button");
    button.innerText = "삭제";
    button.setAttribute("onclick", "removeTask(this);");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("onclick", "getLine(this);");
    li.innerText = inputTask.value;
    todoList.appendChild(li);
    li.prepend(checkBox);
    li.appendChild(button);
    inputTask.value = "";
  }
}

function removeTask(t) {
  t.parentNode.remove();
}

function getLine(t) {
  if (t.parentNode.classList.contains("lined")) {
    t.parentNode.classList.remove("lined");
    // t.parentNode.style.textDecoration = 'line-through';
  } else {
    t.parentNode.classList.add("lined");
  }
}
addBtn.addEventListener("click", addTask);
