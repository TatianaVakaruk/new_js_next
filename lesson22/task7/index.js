const btn = document.querySelectorAll('.btn');
function handleClick(event){
    console.log(event.target.textContent);
}
btn.forEach((button) => {
    button.addEventListener('click', handleClick);
});
