const ADD_BUTTON = document.getElementById('section-header-button');
const INPUT_TEXT = document.getElementById('section-header-input');
const TODO_CONTAINER = document.getElementById('section-incomplete-task-list-parent');
// let toDoContainerHoldData = [];

ADD_BUTTON.addEventListener('click', function createTask() {
  let taskListChildren = document.createElement('li');
  taskListChildren.className = 'section-incomplete-task-list-children';

  let taskInput = document.createElement('input');
  taskInput.type = 'checkbox';
  taskInput.className = 'section-incomplete-task-list-children-checkbox';

  let taskLabel = document.createElement('label');
  taskLabel.className = 'section-incomplete-task-list-children-content';
  taskLabel.innerText = INPUT_TEXT.value;

  let taskButton = document.createElement('h3');
  taskButton.className = 'section-incomplete-task-list-children-delete';
  taskButton.innerText = 'Delete';

  if (INPUT_TEXT.value === '') {
    alert('Please, insert some value!');
  } else {
    TODO_CONTAINER.appendChild(taskListChildren);
    taskListChildren.appendChild(taskInput);
    taskListChildren.appendChild(taskLabel);
    taskListChildren.appendChild(taskButton);
    // toDoContainerHoldData.push(TODO_CONTAINER);
    INPUT_TEXT.value = '';
  }

  taskButton.addEventListener('click', function deleteTask() {
    TODO_CONTAINER.removeChild(taskListChildren);
  });
});
