function delay(delay, callback, context, arg1, arg2){
callback.call(context, arg1, arg2);
   return setTimeout(function(){ callback.call(context, arg1, arg2)
   }, delay);  
    }

   const sum = {
  a: 0,
  b: 0,
  sum(arg1, arg2) {
    this.a = arg1;
    this.b = arg2;
    console.log(this.a + this.b);
    return this.a + this.b;
  }
};
console.log(delay(2000, sum.sum, sum, 5, 4));