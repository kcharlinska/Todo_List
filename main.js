const addBtn = document.querySelector('.add-button');
const input = document.querySelector('.todo-input');
const toDoContainer = document.querySelector('.todo-container');
const doneContainer = document.querySelector('.done-container');

const currentDate = new Date().toDateString();
// const day = currentDate.get

document.querySelector('.main-section p').textContent = currentDate;


const addToDo = (e) => {
    const toDoText = input.value;
    if (toDoText === '') return;
    const toDoItem = document.createElement('div');
    toDoItem.className = 'todo-item';
    toDoItem.innerHTML = `<div class="todo-dot"></div>${toDoText}<i class="todo__edit-ico fas fa-pencil-alt"></i><i class="todo__remove-ico far fa-trash-alt"></i>`;
    toDoContainer.appendChild(toDoItem);
    if (toDoItem.clientHeight > input.clientHeight) {
        toDoItem.style.lineHeight = '1.5';
        toDoItem.style.padding = '5px 70px 5px 50px';
    }
    input.value = '';
    toDoItem.querySelector('.todo__remove-ico').addEventListener('click', deleteToDo);
    toDoItem.querySelector('.todo__edit-ico').addEventListener('click', editToDo);
    toDoItem.querySelector('.todo-dot').addEventListener('click', doneToDo)
}

const doneToDo = (e) => {
    doneContainer.appendChild(e.target.parentNode);
    e.target.parentNode.classList.add('todo-item--checked');
}

const deleteToDo = (e) => {
    e.target.parentNode.remove();
}

const editToDo = (e) => {}

addBtn.addEventListener('click', addToDo)