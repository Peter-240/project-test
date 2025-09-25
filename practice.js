
function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-btn')
  
  if (buttonElement.innerHTML === 'subscribe') {
    buttonElement.innerHTML = 'subscribed';
  
  } else {
    buttonElement.innerHTML = 'subscribe';
  }
}

//shipping calculator
function calculate(){
  const inputElement = document.querySelector('.input-shipping');
  let cost = Number(inputElement.value);

  if (inputElement.value < 40) {
    cost = cost + 10;
    cost.innerHTML += 10;
    console.log(cost);
  }
  document.querySelector('.payment-method').innerHTML = `$${cost}`;
}

//todo tasks

let todoList = [
  {
    name: "peter",
    dueDate: "09-16-2025",
  },
  {
    name: "keza",
    dueDate: "09-20-2025",
  },
]; 

renderTodoList();
function renderTodoList(){
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    //const name = todo.name;
    //const dueDate = todo.dueDate;
    const { name, dueDate } = todo;
    const html = `<p>${name} ${dueDate}
    
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    
    ">Delete</button>

    </p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector(".todo-display").innerHTML = `${todoListHTML}`;
}
function saveTodo(){
 
  const inputElements = document.querySelector(".input-todo-element");
  let name = inputElements.value;

 
  const dateInputElement = document.querySelector(".js-duedate-input");
  
  let dueDate = dateInputElement.value;
  
  todoList.push(
    {
      name,
      
      dueDate
    }
  );
 
  inputElements.value = "";
    renderTodoList();
};
