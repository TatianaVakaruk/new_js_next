const input = document.querySelector('.text-input');
const  change=()=> {
    const text = input.value;
    console.log(text);
}
input.addEventListener('change', change);
