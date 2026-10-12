const buttonElem = document.querySelector('.submit-button');
const inputElem = document.querySelectorAll('.form-input');
const formElem = document.querySelector('.login-form');

const formUrl = 'https://6aca1a103115bcc95820659b.mockapi.io/api/v1/data';

const checkInputs = () => {
    const allFieled = Array.from(inputElem).every(input => input.reportValidity());
    if (allFieled){
        buttonElem.removeAttribute('disabled');
    }
        else{
            buttonElem.setAttribute('disabled', '');
        }
    }
inputElem.forEach(input => input.addEventListener('input', checkInputs));


const data = Object.fromEntries(new FormData(formElem));

const sendData = (e) => {
    e.preventDefault();
    return fetch(formUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(() => {
        return fetch(formUrl); 
    })
    .then(response => response.json())
    .then(serverData => {
        alert(JSON.stringify(serverData));
    });
    
}

buttonElem.addEventListener('click', sendData);

const clearData = () => {
    formElem.reset();
}
buttonElem.addEventListener('click', clearData);


