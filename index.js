const TASK_INPUT = document.getElementById('section-header-input').ariaValueText;
const BUTTON = document.querySelector('#section-header-button');
const INCOMPLETE_LIST_PARENT = document.querySelector('#section-incomplete-task-list-parent');

BUTTON.addEventListener('click', () => {
  alert(TASK_INPUT);
  //   if (TASK_INPUT == '') {
  //     alert('Oh Please');
  //   }

  //   let incompleteListChildren = document.createElement('li');
  //   incompleteListChildren.appendChild(taskInputValue);
  //   INCOMPLETE_LIST_PARENT.appendChild(incompleteListChildren);
});
