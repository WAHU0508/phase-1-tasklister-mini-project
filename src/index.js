document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    addToDoList(e.target.new_task_description.value)
    form.reset()
  })
  
});
function addToDoList(todo) {
  let li = document.createElement('li');
  let button = document.createElement('button');
  button.addEventListener('click', deleteTask)
  li.textContent = `${todo} `
  button.textContent = 'X'
  li.appendChild(button)
  console.log(li)
  document.querySelector('#tasks').appendChild(li);

}
function deleteTask(e) {
  return e.target.parentNode.remove()
}