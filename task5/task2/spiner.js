const spinerElem = document.querySelector('.spinner');
export const showSpiner = () => {
    spinerElem.classList.remove('spinner_hidden');
}
export const hideSpiner = () => {
    spinerElem.classList.add('spinner_hidden');
}
