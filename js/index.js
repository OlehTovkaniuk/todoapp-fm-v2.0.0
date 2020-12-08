const addTodoForm = document.querySelector('#add-todo');
const addTodoInput = document.querySelector('#add-todo input');
const todoList = document.querySelector('#todo-list')

addTodoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTodo();
    }
});

function addTodo() {
    // create li
    const todoLi = document.createElement('li');
    todoLi.classList.add('todos');
    // create div.todo-checks
    const todoCheckDiv = document.createElement('div');
    todoCheckDiv.classList.add('todo-checks');
    todoLi.appendChild(todoCheckDiv);
    // create p.todo-names
    const todoNameP = document.createElement('p');
    todoNameP.classList.add('todo-names')
    todoNameP.innerText = addTodoInput.value;
    todoLi.appendChild(todoNameP);
    // create div.todo-closes
    const todoClosesDiv = document.createElement('div');
    todoClosesDiv.classList.add('todo-closes');
    todoLi.appendChild(todoClosesDiv);
    // append the created li to the list
    todoList.appendChild(todoLi);
    // clear the input field
    addTodoInput.value = '';
}