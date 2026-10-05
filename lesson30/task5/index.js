const delay = delay =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(console.log('Done'));
    }, delay);
  });
  delay(2000);
