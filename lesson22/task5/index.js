const btn = document.querySelector('.search__btn');
const click = () => {
    const input = document.querySelector('.search__input');
    const text = input.value;
    console.log(text);
}
btn.addEventListener('click', click);
