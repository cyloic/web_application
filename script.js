const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');

addTaskButton.addEventListener('click', function() {
  const newTask = newTaskInput.value;
  if (newTask) {
    const listItem = document.createElement('li');
    listItem.textContent = newTask;

    // Create checkbox
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', function() {
      listItem.classList.toggle('completed');
    });

    // Add checkbox and task text to list item
    listItem.appendChild(checkBox);
    listItem.appendChild(document.createTextNode(' ' + newTask));  // Add space between checkbox and text

    taskList.appendChild(listItem);
    newTaskInput.value = '';
  }
});
