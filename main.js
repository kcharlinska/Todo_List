let todoList = ['Do the shopping', 'Feed the cat', 'Clean a bathroom'];

const currentDate = new Date().toDateString();
// const day = currentDate.get
// TODO: change date format
document.querySelector('.header__date').textContent = currentDate;

const showTodo = () => {
    todoList.forEach(function (todo) {
        addTodo(todo);
        countTodo();
    })
}
document.addEventListener('DOMContentLoaded', function () {
    showTodo();
})

const addBtn = document.querySelector('.add-todo__btn');

const addTodo = (todo) => {
    const todoLi = document.createElement('li');
    document.querySelector('.todo__section ul').appendChild(todoLi);
    todoLi.innerHTML = `<div class="todo__container"><div class="todo__btn"><button class="btn btn__complete complete-todo-btn"></button></div><input type="text" class="todo__txt" placeholder="Write a ToDo..." value="${todo}"><div class="todo__btn"><button class="btn btn__delete delete-todo-btn"></button></div></div>`;
    todoLi.querySelector('.complete-todo-btn').addEventListener('click', doneTodo);
    todoLi.querySelector('.delete-todo-btn').addEventListener('click', deleteTodo);
    // console.log(todo);
    // const todoInput = document.querySelectorAll('.todo__txt');
    // todoInput.forEach((item) => {
    //     item.focus();
    // })
    // const txt = todoInput.value;
    // console.log(txt);
    // document.querySelector('.todo__txt').oninput = (e) => {
    //     console.log(e.target.value); // Do something
    // }
}

let active = true;

const doneTodo = (e) => {
    const todoItem = e.target.closest('div').parentNode;
    console.log(todoItem);
    const todoSection = document.querySelector('.todo__section ul');
    const doneSection = document.querySelector('.done__section ul');
    todoItem.classList.contains('todo__container--checked') ? active = false : active = true;
    active ? doneSection.appendChild(todoItem.parentNode) : todoSection.appendChild(todoItem.parentNode);
    todoItem.classList.toggle('todo__container--checked');
}

const deleteTodo = (e) => {
    const btn = e.target.closest('div').parentNode;
    console.log(btn);
    const txt = btn.querySelector('.todo__txt').value;
    console.log(txt);
    // todoList.filter(item => item !== txt)
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i] === txt) todoList.splice(i, 1);
    }
    console.log(todoList[2]);
    console.log(todoList);
    // const input = btn.closest('input');
    // console.log(input);
    e.target.closest('li').remove();
    countTodo();
}

// HTMLInputElementObject.addEventListener('input', function () {
//     const newTask = this.value;
//     console.log(newTask);
// });
// const todoInputs = document.getElementsByClassName('todo__txt');
// console.log(todoInputs);

addBtn.addEventListener('click', function () {
    if (todoList.length === document.querySelectorAll('input').length) {
        const todo = '';
        addTodo(todo);
        document.querySelectorAll('.todo__txt').forEach((item) => {
            item.focus();
        })
        addToList();
    }
});

const addToList = () => {
    const todoInputs = document.getElementsByClassName('todo__txt');
    Array.from(todoInputs).forEach((item) => {
        item.addEventListener('change', function () {
            // const newTask = item.value;
            // console.log(newTask);
            // console.log(Array.from(todoInputs).indexOf(item));
            const todoNum = Array.from(todoInputs).indexOf(item);
            todoList.splice(todoNum, 1, item.value);
            console.log(todoList);
            countTodo();
        })
    })
}


const countTodo = () => {
    const counter = document.querySelector('.header__counter');
    if (todoList.length === 1) counter.textContent = `${todoList.length} Task`;
    else counter.textContent = `${todoList.length} Tasks`
}


// document.querySelector('.todo__txt').addEventListener('focusout', function () {
//     console.log(this.value);
// });

// Array.from(todoInputs).forEach((item) => {
//     console.log(todoInputs);
//     item.addEventListener('focusout', function () {
//         console.log(item.value);
//     })
// })

// todoInputs.forEach((item).addEventListener('change', function () {
//     const newTask = item.value;
//     console.log(newTask);
// }))




// --- OLD ---

// const input = document.querySelector('.todo__input');
// const toDoSection = document.querySelector('.todo__section');
// const doneSection = document.querySelector('.done__section');

// let active = true;

// const currentDate = new Date().toDateString();
// // const day = currentDate.get
// // TODO: change date format
// document.querySelector('.main__section p').textContent = currentDate;

// input.addEventListener('keypress', function (e) {
//     if (e.keyCode === 13) {
//         e.preventDefault();
//     }
// })

// const addToDo = () => {
//         const txt = input.value;
//         if (txt === '') return;
//         const toDoItem = document.createElement('div');
//         toDoItem.className = 'todo__container';
//         toDoItem.innerHTML = `<div class="todo__dot"><i class="far fa-circle"></i></div>
//     <div class="todo__text">${txt}</div>
//     <div class="todo__icons"><i class="fas fa-pencil-alt"></i><i class="far fa-trash-alt"></i>
//     </div>`;
//         const toDoText = toDoItem.children[1];
//         toDoSection.appendChild(toDoItem);
//         if (toDoItem.clientHeight > input.clientHeight) {
//             toDoText.classList.add('todo__text--long');
//         }
//     // FIXME: check height again after resizing the window and change 'todo-text--long' class
//     input.value = '';
//     toDoItem.querySelector('.fa-trash-alt').addEventListener('click', deleteToDo);
//     toDoItem.querySelector('.fa-pencil-alt').addEventListener('click', editToDo);
//     toDoItem.querySelector('.todo__dot .fa-circle').addEventListener('click', doneToDo);
// }

// const doneToDo = (e) => {
//     const toDoItem = e.target.parentNode.parentNode;
//     toDoItem.classList.contains('todo__container--checked') ? active = false : active = true;
//     active ? doneSection.appendChild(toDoItem) : toDoSection.appendChild(toDoItem);
//     toDoItem.classList.toggle('todo__container--checked');
// }

// const deleteToDo = (e) => {
//     e.target.parentNode.parentNode.remove();
// }

// const editToDo = (e) => {
//     const toDoItem = e.target.parentNode.previousElementSibling;
//     toDoItem.contentEditable = true;
//     toDoItem.focus();
//     toDoItem.onkeyup = function () {
//         toDoItem.clientHeight > input.clientHeight ? toDoItem.classList.add('todo__text--long') : toDoItem.classList.remove('todo__text--long');
//     }
//     // FIXME: remove contentEditable after click outside todo
//     // const isClickInside = toDoItem.parentNode.contains(e.target);
//     // if (!isClickInside) {
//     //     toDoItem.contentEditable = false;
//     // }
// }

// document.querySelector('.add__button').addEventListener('click', addToDo)