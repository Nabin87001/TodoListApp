

let todoList=JSON.parse(localStorage.getItem('TodoList'))||[{
  name:'make dinner',
  dueDate:'2024-12-11'
},{
  name:'wash dish',
  dueDate:'2024-12-23'
}];
//console.log(JSON.parse(localStorage.getItem('todoList')));
//console.log(JSON.parse(localStorage.getItem('TodoList')));
renderTodoList();

function renderTodoList(TodoList) {
  let todoListHTML='';

  todoList.forEach((todoObject,index) =>{
    //const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name,dueDate} = todoObject;

    const html=`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML+=html;
  });
  /*
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name,dueDate} = todoObject;

    const html=`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button" onclick="
      todoList.splice(${i},1);
      renderTodoList();
      saveToStorage();
    ">Delete</button>
    `;
    todoListHTML+=html;
    
  }
    */
  //console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML=todoListHTML;
  //document.querySelectorAll('.js-delete-todo-button') this is like array it will give all the rows(how many to do list we have)
  //querySelectorAll used for to get list of all the delete button on the page
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton,index)=>{
      deleteButton.addEventListener('click', ()=>{
        todoList.splice(index,1);
        renderTodoList();
        saveToStorage();
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click',()=>{
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name:name,
    dueDate:dueDate
  });
  //console.log(todoList);
  inputElement.value='';
  renderTodoList(todoList);
  saveToStorage();
}
function saveToStorage() {
  localStorage.setItem('TodoList',JSON.stringify(todoList));
}