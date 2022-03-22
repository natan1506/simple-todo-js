(function(){
  const todos = localStorage.getItem('todos@local');

  console.log(!!todos)

  
})()

function insertTodo() {
  const input = document.getElementById('todo')
  console.log(input.value)
  input.value = '';
  

}