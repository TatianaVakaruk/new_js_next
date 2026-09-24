const successPromise = new Promise(resolve => {
  resolve(67);
});


successPromise.then(function onSuccess(number) {
  console.log(number * number);
});
successPromise.catch(function onError() {
console.log('I am an error');
});

