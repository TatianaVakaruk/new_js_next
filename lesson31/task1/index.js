const getValueWithDelay = (value, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(value);
            resolve(value);
        }, delay)
    })
}

const asyncNumber1 = getValueWithDelay(14, 1000);
const asyncNumber2 = getValueWithDelay(4, 2000);
const asyncNumber3 = getValueWithDelay('fgghgh', 3000);

const getSum = (numbers) => {
    return numbers
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);
}

const asyncSum = (...asyncNumbers) => {
return Promise.all(asyncNumbers)
.then(numbers => getSum(numbers))
.catch(() => Promise.reject(new Error('Can\'t calculate the sum')));
}

asyncSum(asyncNumber1, Promise.reject(new Error('err')), asyncNumber3)
.then(result => (console.log(result)));
