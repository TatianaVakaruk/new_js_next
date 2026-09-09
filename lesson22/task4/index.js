const checkbox = document.querySelector('.task-status');
const checked = () => {
    console.log(checkbox.checked);
}
checkbox.addEventListener('change', checked);
