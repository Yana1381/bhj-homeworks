const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const tasksAdd = document.getElementById("tasks__add");

function createElement(todoText) {
  if (todoText !== "") {
    tasksList.insertAdjacentHTML(
      "beforeend",
      `<div class="task"> <div class="task__title">${todoText}</div> <a href="#" class="task__remove">&times;</a> </div>`
    );
    addListener();
  }
}

function addListener() {
  arrayRemoveButtons = Array.from(tasksList.getElementsByClassName("task__remove"));
  const lastIndex = arrayRemoveButtons.length - 1;

  arrayRemoveButtons[lastIndex].addEventListener("click", remove);
}

function remove(e) {
  e.preventDefault();
  const target = e.target;
  const parentDiv = target.closest(".task");

  parentDiv.remove();
}

function pressButton(e) {
  e.preventDefault();

  const text = taskInput.value.trim();
  createElement(text);

  taskInput.value = "";
}

tasksAdd.addEventListener("click", pressButton);