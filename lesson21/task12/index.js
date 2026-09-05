const squaredNumbers = () => {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach((element)=>{
const currentNumber = Number(element.dataset.number);
const squared = currentNumber * currentNumber;
element.dataset.squaredNumber = squared;
    });
};
squaredNumbers();