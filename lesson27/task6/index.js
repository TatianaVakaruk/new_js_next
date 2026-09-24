const sum = limit => {
    let value = limit;
    let sum = 0;
    do{
        sum += value;
        value -= 1;
    }while(value > 0);
    return sum;
}
console.log(sum(4));