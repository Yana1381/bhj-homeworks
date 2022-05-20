const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');

function createElement() {
    tasksList.insertAdjacentHTML('beforeend','<div class="task"> <div class="task__title"></div> <a href="#" class="task__remove">&times;</a> </div>');
};

function pressButton() {
    
};

function pressEnter(e) {
    if (e.key === 'Enter') {
        pressButton;
    };
};

tasksAdd.addEventListener('click', pressButton);
taskInput.addEventListener('keyup', pressEnter);