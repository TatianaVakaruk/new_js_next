const input = document.querySelector('.text-input');
const inputValue = event => {
  console.log(event.target.value);
};
input.addEventListener('change', inputValue);

