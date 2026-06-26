import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="todo-container">
    <h1>Task Tracker</h1>

    <div class="todo-form">
      <input type="text" id="taskInput" placeholder="Enter a task..." />
      <button id="addTaskBtn">Додати</button>
    </div>

    <ul id="taskList"></ul>
  </div>
`

const taskInput = document.querySelector('#taskInput')
const addTaskBtn = document.querySelector('#addTaskBtn')
const taskList = document.querySelector('#taskList')

function addTask() {
  const taskText = taskInput.value.trim()

  if (taskText === '') {
    alert('Please enter a task')
    return
  }

  const taskItem = document.createElement('li')
taskItem.textContent = taskText

taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed')
})

taskList.appendChild(taskItem)
taskInput.value = ''
}

addTaskBtn.addEventListener('click', addTask)

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask()
  }
})