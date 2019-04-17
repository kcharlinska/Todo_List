let todoList = ['Do the shopping', 'Feed the cat', 'Clean a bathroom'];

const currentDate = new Date().toDateString();
document.querySelector('.header__date').textContent = currentDate;

const showTodo = () => {
    todoList.forEach(function (todo) {
        addTodo(todo);
        countTodo();
    })
}
document.addEventListener('DOMContentLoaded', showTodo);

const addBtn = document.querySelector('.add-todo__btn');

const addTodo = (todo) => {
    const todoLi = document.createElement('li');
    document.querySelector('.todo__section ul').appendChild(todoLi);
    todoLi.innerHTML = `<div class="todo__container"><div class="todo__btn"><button class="btn btn__complete complete-todo-btn"></button></div><input type="text" class="todo__txt" placeholder="Write a ToDo..." value="${todo}"><div class="todo__btn"><button class="btn btn__delete delete-todo-btn"></button></div></div>`;
    todoLi.querySelector('.complete-todo-btn').addEventListener('click', doneTodo);
    todoLi.querySelector('.delete-todo-btn').addEventListener('click', deleteTodo);
}

let active = true;

const doneTodo = (e) => {
    const doneBtn = e.target;
    const todoItem = e.target.closest('div').parentNode;
    const inputValue = e.target.parentNode.nextSibling.value;
    if (inputValue) {
        todoItem.classList.contains('todo__container--checked') ? active = false : active = true;
        todoItem.classList.toggle('todo__container--checked');
        doneBtn.classList.contains('.btn__complete--checked') ? active = false : active = true;
        doneBtn.classList.toggle('btn__complete--checked');
    } else focusTodo();
}

const deleteTodo = (e) => {
    const btn = e.target.closest('div').parentNode;
    const txt = btn.querySelector('.todo__txt').value;
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i] === txt) todoList.splice(i, 1);
    }
    e.target.closest('li').remove();
    countTodo();
}

const focusTodo = () => {
    document.querySelectorAll('.todo__txt').forEach((item) => {
        item.focus();
    })
}

addBtn.addEventListener('click', function () {
    if (todoList.length === document.querySelectorAll('input').length) {
        const todo = '';
        addTodo(todo);
        addToList();
    }
    focusTodo();
})

const addToList = () => {
    const todoInputs = document.getElementsByClassName('todo__txt');
    Array.from(todoInputs).forEach((item) => {
        const approveTodo = () => {
            const todoNum = Array.from(todoInputs).indexOf(item);
            todoList.splice(todoNum, 1, item.value);
            countTodo();
        }
        item.addEventListener('change', approveTodo)
        item.addEventListener('keypress', (e) => {
            if ((e.keyCode == 13) && (e.target.value)) {
                approveTodo();
                addBtn.focus();
            }
        });
    })
}

const countTodo = () => {
    const counter = document.querySelector('.header__counter');
    if (todoList.length === 1) counter.textContent = `${todoList.length} Task`;
    else counter.textContent = `${todoList.length} Tasks`
}