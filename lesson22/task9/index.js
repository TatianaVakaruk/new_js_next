const checkbox = document.querySelector('.task-status');
const statusCheckbox = event => {
  console.log(event.target.checked);
};
checkbox.addEventListener('change', statusCheckbox);
