const makePromise = (num) => {
  // put you code here
  return new Promise(resolve=> {
    resolve(num);
  })
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});

