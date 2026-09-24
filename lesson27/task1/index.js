const calc = initValue => {
    let result = initValue;
    const calculator = {
     add(value) {
       result += value;
       return this;
     },
     mult(value) {
       result *= value;
       return this;
     },
      div(value) {
       result /= value;
       return this;
     },
      substruct(value) {
       result -= value;
       return this;
     },
     result(){
        return result;
     }
    }
    return calculator;
}
console.log(calc(5).add(2).mult(3).div(7).substruct(1).result());