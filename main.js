const input = document.querySelector('.todo-input');
const toDoSection = document.querySelector('.todo-section');
const doneSection = document.querySelector('.done-section');

let active = true;

const currentDate = new Date().toDateString();
// const day = currentDate.get
// TODO: change date format
document.querySelector('.main-section p').textContent = currentDate;

input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
    }
})

const addToDo = () => {
    const txt = input.value;
    if (txt === '') return;
    const toDoItem = document.createElement('div');
    toDoItem.className = 'todo-container';
    toDoItem.innerHTML = `<div class="todo-dot"><i class="far fa-circle"></i></div>
    <div class="todo-text">${txt}</div>
    <div class="todo-icons"><i class="fas fa-pencil-alt"></i><i class="far fa-trash-alt"></i>
    </div>`;
    const toDoText = toDoItem.children[1];
    toDoSection.appendChild(toDoItem);
    if (toDoItem.clientHeight > input.clientHeight) {
        toDoText.classList.add('todo-text--long');
    }
    // FIXME: check height again after resizing the window and change 'todo-text--long' class
    input.value = '';
    toDoItem.querySelector('.fa-trash-alt').addEventListener('click', deleteToDo);
    toDoItem.querySelector('.fa-pencil-alt').addEventListener('click', editToDo);
    toDoItem.querySelector('.todo-dot .fa-circle').addEventListener('click', doneToDo);
}

const doneToDo = (e) => {
    const toDoItem = e.target.parentNode.parentNode;
    toDoItem.classList.contains('todo-container--checked') ? active = false : active = true;
    active ? doneSection.appendChild(toDoItem) : toDoSection.appendChild(toDoItem);
    toDoItem.classList.toggle('todo-container--checked');
}

const deleteToDo = (e) => {
    e.target.parentNode.parentNode.remove();
}

const editToDo = (e) => {
    const toDoItem = e.target.parentNode.previousElementSibling;
    toDoItem.contentEditable = true;
    toDoItem.focus();
    toDoItem.onkeyup = function () {
        toDoItem.clientHeight > input.clientHeight ? toDoItem.classList.add('todo-text--long') : toDoItem.classList.remove('todo-text--long');
    }
    // FIXME: remove contentEditable after click outside todo
    // const isClickInside = toDoItem.parentNode.contains(e.target);
    // if (!isClickInside) {
    //     toDoItem.contentEditable = false;
    // }
}

document.querySelector('.add-button').addEventListener('click', addToDo)