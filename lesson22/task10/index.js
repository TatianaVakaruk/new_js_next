const button = document.querySelectorAll('.pagination__page');
const handleClick = (event) => {
     console.log(event.target.dataset.pageNumber);
};
button.forEach((btn) => {
    btn.addEventListener('click', handleClick);
});
