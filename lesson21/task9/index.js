const finishList = () => {
    const ul = document.querySelector('.list');
    const li1 = document.createElement('li');
    li1.textContent = 1;
    ul.prepend(li1);
    const li8 = document.createElement('li');
    li8.textContent= 8;
    ul.append(li8);
    const li5 = document.querySelector('.special');
    const li4 = document.createElement('li');
    li4.textContent = 4;
    li5.before(li4);
    const  li6 = document.createElement('li');
    li6.textContent = 6;
    li5.after(li6);
}
finishList();