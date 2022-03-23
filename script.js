(function(){
  const todos = JSON.parse(localStorage.getItem('todos@local'));

  if(todos){
    generateList(todos)
  }  
})()

function insertTodo() {
  const input = document.getElementById('todo')
  console.log(input.value)

  const todos = localStorage.getItem('todos@local') ? JSON.parse(localStorage.getItem('todos@local')) : [];
  
  todos.push(input.value)
  localStorage.setItem('todos@local', JSON.stringify(todos));
  generateList(todos);
  input.value = '';
  
}

function generateList(todos){
  const divListTodo = document.getElementById('listTodo');
  divListTodo.innerHTML = ""

  for(i = 0; i < todos.length; i++){
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${todos[i]}</span>
      <button onclick="removeTodo(${i})">X</button>
    `
    divListTodo.appendChild(li)
  }
}

function removeTodo(index){
  const todos = JSON.parse(localStorage.getItem('todos@local'));
  todos.splice(index, 1);

  localStorage.setItem('todos@local', JSON.stringify(todos));
  generateList(todos);
}