let taskId = 0;

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    taskId++;

    const taskList = document.querySelector('.task-list');

    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
      <input type="checkbox" id="task${taskId}">
      <label for="task${taskId}">${taskText}</label>
    `;

    taskList.appendChild(task);
    taskInput.value = '';
  } else {
    alert('Please enter a task!');
  }
}

