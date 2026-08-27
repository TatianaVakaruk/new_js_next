function sumOfSquares (){
 return [...arguments].map((el)=> el * el).reduce((acc, el) => acc + el, 0);
}
console.log(sumOfSqures(1, 2, 3));
