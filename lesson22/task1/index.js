const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML += `<span style="color:${color}; margin-left: 8px">${text}</span>`;
}
const logGreenDiv = logTarget.bind(null,'DIV', 'green');
const logGreenP = logTarget.bind(null,'P', 'green');
const logGreenSpan = logTarget.bind(null,'SPAN', 'green');

const logGreyDiv = logTarget.bind(null,'DIV', 'grey');
const logGreyP = logTarget.bind(null,'P', 'grey');
const logGreySpan = logTarget.bind(null,'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);


spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

const clear_btn = document.querySelector('.clear-btn');
const clear = ()=> {
    const listElem = document.querySelector('.events-list');
    listElem.innerHTML = '';
}

clear();

clear_btn.addEventListener('click', clear);

const remove_btn = document.querySelector('.remove-handlers-btn');

const removeHandles = () => {
    divElem.removeEventListener('click', logGreyDiv, true);
    divElem.removeEventListener('click', logGreenDiv);

    pElem.removeEventListener('click', logGreyP, true);
    pElem.removeEventListener('click', logGreenP);

    spanElem.removeEventListener('click', logGreySpan, true);
    spanElem.removeEventListener('click', logGreenSpan);
}

remove_btn.addEventListener('click', removeHandles);


const attach_btn = document.querySelector('.attach-handlers-btn');
const attachHandle = ()=> {
divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);
}
attach_btn.addEventListener('click', attachHandle);

attachHandle();